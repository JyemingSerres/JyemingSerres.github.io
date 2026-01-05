export default class Selector {
    constructor(htmlClass, dataKey) {
        this.navElements = document.querySelectorAll("." + htmlClass);
        this.selected = this.navElements.values().find((element) => element.classList.contains("selected"));
        this.dataKey = dataKey;
    }

    setAction(action) {
        for (const navElement of this.navElements) {
            const data = navElement.dataset[this.dataKey];
            navElement.addEventListener("click", (event) => {
                this.#changeSelected(event.target)
                action(data);
            });
        }
    }

    setDefault(val) {
        if (this.selected) return;

        for (const navElement of this.navElements) {
            if (navElement.dataset[this.dataKey] === val) {
                this.#changeSelected(navElement);
                break;
            }
        }
    }

    getOptions() {
        const options = new Set();

        for (const navElement of this.navElements)
            options.add(navElement.dataset[this.dataKey])

        return options
    }

    #changeSelected(target) {
        if (target === this.selected) return;

        if (this.selected)
            this.selected.classList.remove("selected");
        target.classList.add("selected");
        this.selected = target;
    }
}