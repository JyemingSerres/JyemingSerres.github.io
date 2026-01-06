import translationData from "../../data/translations.json";


export const TRANSLATE_KEY = "trnsl";

export default class Translator {
    constructor() {
        this.languages = ["en", "fr"];
        this.lang = document.querySelector("html").lang;

        this.#selectBrowserLang();
        this.updateDomTexts();
    }

    /**
     * Attempts to change the current language and updates the DOM on success.
     * @param {string} newLang - The new language.
     * @returns {void}
     */
    changeLang(newLang) {
        if (!this.languages.includes(newLang)) return;
        if (newLang === this.lang) return;

        this.lang = newLang;
        this.updateDomTexts();
    }

    /**
     * Selects the browser's most preferred language if possible.
     * @private
     * @returns {void}
     */
    #selectBrowserLang() {
        for (const language of navigator.languages) {
            const candidate = language.split("-")[0];
            if (this.languages.includes(candidate) && candidate !== this.lang)
                this.lang = candidate;
        }
    }

    /**
     * Updates texts currently in the DOM.
     * @returns {void}
     */
    updateDomTexts() {
        this.updateTexts(document);
    }

    /**
     * Updates the elements affected by i18n within a parent element with to the current language.
     * @param {HTMLElement} parent - The parent element to update.
     * @returns {void}
     */
    updateTexts(parent) {
        const elements = parent.querySelectorAll("[data-" + TRANSLATE_KEY + "]");
        for (const element of elements) {
            const key = element.dataset[TRANSLATE_KEY];
            element.textContent = translationData[this.lang][key] || key;
        }
    }
}
