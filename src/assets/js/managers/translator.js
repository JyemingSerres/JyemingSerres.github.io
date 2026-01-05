import translationData from "../../data/translations.json";


export const TRANSLATE_KEY = "trnsl";

export default class Translator {
    constructor() {
        this.languages = ["en", "fr"];
        this.lang = document.querySelector("html").lang;

        this.#matchBrowserLang();
        this.updateDomTexts();
    }

    changeLang(newLang) {
        if (!this.languages.includes(newLang)) return;
        if (newLang === this.lang) return;

        this.lang = newLang;
        this.updateDomTexts();
    }

    #matchBrowserLang() {
        for (const language of navigator.languages) {
            const candidate = language.split("-")[0];
            if (this.languages.includes(candidate) && candidate !== this.lang)
                this.lang = candidate;
        }
    }

    updateDomTexts() {
        this.updateTexts(document);
    }

    updateTexts(parent) {
        const elements = parent.querySelectorAll("[data-" + TRANSLATE_KEY + "]");
        for (const element of elements) {
            const key = element.dataset[TRANSLATE_KEY];
            element.textContent = translationData[this.lang][key] || key;
        }
    }
}
