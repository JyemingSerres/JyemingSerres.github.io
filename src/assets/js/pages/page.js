export default class Page {
    /**
     * @param {function} loader
     * @param {Translator} translator
     */
    constructor(loader, translator) {
        this.loader = loader;
        this.cache = undefined;
        this.translator = translator;
        this.lang = undefined;
    }

    /**
     * Generates the page or retrieves it from the cache. Language is updated.
     * @returns {HTMLElement} Element of the page.
     */
    getContent() {
        if (this.cache === undefined)
            this.cache = this.loader();
        this.#updateLang();
        return this.cache;
    }

    /**
     * Updates the page's texts with the correct language if needed.
     * @private
     * @returns {void}
     */
    #updateLang() {
        if (this.lang === this.translator.lang) return;
        
        this.translator.updateTexts(this.cache);
    }
}