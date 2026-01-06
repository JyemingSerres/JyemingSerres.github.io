export default class Selector {
    /**
     * @param {string} htmlClass - The HTML class unique to the set of elements to select from.
     * @param {string} dataKey - The key to the relevant data of the elements.
     */
    constructor(htmlClass, dataKey) {
        this.navElements = document.querySelectorAll("." + htmlClass);
        this.selected = this.navElements.values().find((element) => element.classList.contains("selected"));
        this.dataKey = dataKey;
    }

    /**
     * Sets the action for when an element is clicked.
     * @param {function} action - The function to call with the selected element's data.
     * @returns {void}
     */
    setAction(action) {
        for (const navElement of this.navElements) {
            navElement.addEventListener("click", () => {
                this.#changeSelected(navElement)
                action(navElement.dataset[this.dataKey]);
            });
        }
    }

    /**
     * Selects the element matching the value if nothing is selected.
     * @param {string} val - The value to match.
     * @returns {void}
     */
    setDefault(val) {
        if (this.selected) return;

        for (const navElement of this.navElements) {
            if (navElement.dataset[this.dataKey] === val) {
                this.#changeSelected(navElement);
                break;
            }
        }
    }

    /**
     * Changes the selected element.
     * @private
     * @param {Element} target - The element to be selected.
     * @returns {void}
     */
    #changeSelected(target) {
        if (target === this.selected) return;

        if (this.selected)
            this.selected.classList.remove("selected");
        target.classList.add("selected");
        this.selected = target;
    }
}
