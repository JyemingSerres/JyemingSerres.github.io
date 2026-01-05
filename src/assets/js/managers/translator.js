import translationData from "../../data/translations.json";


export const TRANSLATE_KEY = "trnsl";

export default class Translator {
    constructor(languages) {
        this.languages = languages;
        this.lang = document.querySelector("html").lang;

        this.#matchBrowserLang();
        this.#updateTexts();
    }

    changeLang(newLang) {
        if (!this.languages.has(newLang)) return;
        if (newLang === this.lang) return;

        this.lang = newLang;
        this.#updateTexts();
    }

    #matchBrowserLang() {
        for (const language of navigator.languages) {
            const candidate = language.split("-")[0];
            if (this.languages.has(candidate) && candidate !== this.lang) {
                this.lang = candidate;
            }
        }
    }

    #updateTexts() {
        const elements = document.querySelectorAll("[data-" + TRANSLATE_KEY + "]");
        for (const element of elements) {
            const key = element.dataset[TRANSLATE_KEY];
            element.textContent = translationData[this.lang][key] || key;
        }
    }
}
