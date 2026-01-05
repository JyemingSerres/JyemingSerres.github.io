export default class Router {
    constructor(pageContent) {
        this.routes = new Map();
        this.page = null;
        this.pageContent = pageContent;
    }

    addRoute(route, loader) {
        this.routes.set(route, loader);
        if (this.routes.size === 1)
            this.navigateTo(route);
    }

    navigateTo(route) {
        if (this.#changePage(route)) {
            this.pageContent.innerHTML = "";
            this.routes.get(this.page)(this.pageContent);
        }
    }

    routeExists(route) {
        return this.routes.has(route);
    }

    #changePage(route) {
        if (!this.routeExists(route)) return false;
        if (this.page === route) return false;
        
        this.page = route;
        return true;
    }
}