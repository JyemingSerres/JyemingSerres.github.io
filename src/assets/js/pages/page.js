export default class Page {
    constructor(loader, translator) {
        this.loader = loader;
        this.cache = undefined;
        this.translator = translator;
        this.lang = undefined;
    }

    getContent() {
        if (this.cache === undefined)
            this.cache = this.loader();
        this.#updateLang();
        return this.cache;
    }

    #updateLang() {
        if (this.lang === this.translator.lang) return;
        
        this.translator.updateTexts(this.cache);
    }
}