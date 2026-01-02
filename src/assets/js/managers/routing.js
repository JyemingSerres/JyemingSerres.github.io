console.log("route");

export default class Router {
    constructor(content) {
        this.routes = new Map();
        this.content = content;
        this.page = null;
    }

    addRoute(route, pageChange) {
        this.routes.set(route, pageChange);
        if (this.routes.size == 1) {
            this.#update(route);
        }
    }

    addNavigation(element, route) {
        if (this.routeExists(route)) {
            element.addEventListener("click", () => {
                this.#update(route);
            });
        }
    }

    routeExists(route) {
        return this.routes.get(route) !== undefined;
    }

    #changePage(route) {
        const newPage = this.routeExists(route) ? route : "/404";

        if (this.page === newPage)
            return false;
        this.page = newPage;
        return true;
    }

    #update(route) {
        if (this.#changePage(route)) {
            this.content.innerHTML = "";
            this.routes.get(route)(this.content);
        }
    }
}