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

    #changeSelected(target) {
        if (target !== this.selected) {
            this.selected.classList.remove("selected");
            target.classList.add("selected");
            this.selected = target;
        }
    }
}