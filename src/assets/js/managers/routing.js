export default class Router {
    /**
     * @param {HTMLElement|null} contentDest - DOM element where the page will be inserted.
     */
    constructor(contentDest) {
        this.contentDest = contentDest;
        this.routes = new Map();
        this.currentRoute = null;
    }

    /**
     * Adds a new route to a page.
     * @param {string} route - The new route.
     * @param {Page} page - The page.
     * @returns {void}
     */
    addRoute(route, page) {
        this.routes.set(route, page);
        if (this.routes.size === 1)
            this.navigateTo(route);
    }

    /**
     * Navigates to the new route and updates the content on success.
     * @param {string} route - The route.
     * @returns {void}
     * @throws An error if the route doesn't exist.
     */
    navigateTo(route) {
        if (!this.routes.has(route)) throw new Error("'" + route + "' is not a route that exists.");
        if (this.currentRoute === route) return;
        
        this.currentRoute = route;
        this.#update();
    }

    /**
     * Updates the content to the current page.
     * @private
     * @returns {void}
     */
    #update() {
        this.contentDest.innerHTML = "";
        const theContent = this.routes.get(this.currentRoute).getContent();
        this.contentDest.appendChild(theContent);
    }
}
