export default class Router {
    constructor(contentDest) {
        this.contentDest = contentDest;
        this.routes = new Map();
        this.pageCache = new Map();
        this.currentPage = null;
    }

    addRoute(route, loader) {
        this.routes.set(route, loader);
        if (this.routes.size === 1)
            this.navigateTo(route);
    }

    routeExists(route) {
        return this.routes.has(route);
    }

    navigateTo(route) {
        if (!this.routeExists(route)) return;
        if (this.currentPage === route) return;
        
        this.currentPage = route;
        this.#update();
    }

    #update() {
        this.contentDest.innerHTML = "";
        if (this.pageCache.has(this.currentPage)) {
            this.contentDest.appendChild(this.pageCache.get(this.currentPage));
        } else {
            const theContent = this.routes.get(this.currentPage)();
            this.pageCache.set(this.currentPage, theContent);
            this.contentDest.appendChild(theContent);
        }
    }
}
