export default class Router {
    constructor(contentDest) {
        this.contentDest = contentDest;
        this.routes = new Map();
        this.currentRoute = null;
    }

    addRoute(route, page) {
        this.routes.set(route, page);
        if (this.routes.size === 1)
            this.navigateTo(route);
    }

    routeExists(route) {
        return this.routes.has(route);
    }

    navigateTo(route) {
        if (!this.routeExists(route)) return;
        if (this.currentRoute === route) return;
        
        this.currentRoute = route;
        this.#update();
    }

    #update() {
        this.contentDest.innerHTML = "";
        const theContent = this.routes.get(this.currentRoute).getContent();
        this.contentDest.appendChild(theContent);
    }
}
