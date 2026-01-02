export default class Router {
    constructor(content) {
        this.routes = new Map();
        this.page = null;
        this.content = content;
    }

    addRoute(route, pageChange) {
        this.routes.set(route, pageChange);
        if (this.routes.size == 1) {
            this.navigateTo(route);
        }
    }

    navigateTo(route) {
        if (this.#changePage(route)) {
            this.content.innerHTML = "";
            this.routes.get(this.page)(this.content);
        }
    }

    routeExists(route) {
        return this.routes.get(route) !== undefined;
    }

    #changePage(route) {
        if (!this.routeExists(route) || this.page === route)
            return false;
        this.page = route;
        return true;
    }
}