export default class NavigationManager {
    constructor(router) {
        this.router = router;
        this.parent = document.querySelector(".navbar-nav");
        this.navElements = this.parent.getElementsByClassName("nav-link");
        this.selected = this.parent.querySelector(".selected");
    }

    initialize() {
        for (const navElement of this.navElements) {
            const route = navElement.dataset.route;
            if (this.router.routeExists(route)) {
                navElement.addEventListener("click", (event) => {
                    this.changeSelected(event.target)
                    this.router.navigateTo(route);
                });
            }
        }
    }

    changeSelected(target) {
        if (target !== this.selected) {
            this.selected.classList.remove("selected");
            target.classList.add("selected");
            this.selected = target;
        }
    }
}