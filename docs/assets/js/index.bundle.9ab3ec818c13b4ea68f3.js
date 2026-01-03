/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 13:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/b2596fbcb8ffd1d70588.jpg";

/***/ }),

/***/ 170:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/42faa722ff22dfd1a095.png";

/***/ }),

/***/ 666:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "assets/images/c919b2c0f6cc0f913c3c.png";

/***/ }),

/***/ 868:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./default.jpg": 13,
	"./portfolio-website.png": 666,
	"./projection-of-3D-shapes.png": 170
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 868;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl + "../../";
/******/ 	})();
/******/ 	
/************************************************************************/
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";

;// ./src/assets/js/managers/routing.js
class Router {
    constructor(content) {
        this.routes = new Map();
        this.page = null;
        this.content = content;
    }

    addRoute(route, loader) {
        this.routes.set(route, loader);
        if (this.routes.size === 1) {
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
;// ./src/assets/js/managers/navigationManager.js
class NavigationManager {
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
;// ./src/assets/js/pages/home.js


function loadHome(parent) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("front-text-wrapper");

    const name = document.createElement("div");
    name.classList.add("front-name");
    name.textContent = "Jye-Ming Serres";
    wrapper.appendChild(name);

    const status = document.createElement("div");
    status.classList.add("front-status");
    status.textContent = "Étudiant en génie logiciel à Polytechnique Montréal"; // TODO: i18n
    wrapper.appendChild(status);

    parent.appendChild(wrapper);
}
;// ./src/assets/data/projects/projects.json
const projects_namespaceObject = /*#__PURE__*/JSON.parse('[{"title":"Portfolio website","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit.","imageFileName":"portfolio-website.png","githubLink":"https://github.com/JyemingSerres/JyemingSerres.github.io","stack":["HTML","CSS","JS","Webpack"]},{"title":"Projection of 3D shapes","description":"The goal of this exercise is to display 3D shapes onto a 2D screen. Using mouse and keyboard inputs, the user is able to travel across space to inspect objects at various angles.","imageFileName":"projection-of-3D-shapes.png","githubLink":"https://github.com/JyemingSerres/projection-of-3D-shapes","stack":["Python"]}]');
;// ./src/assets/js/pages/projects.js





const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

// imports all images links, see https://webpack.js.org/guides/dependency-management/#context-module-api
// eslint-disable-next-line no-undef
importAll(__webpack_require__(868));


function loadProjects(parent) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");

    for (const project of projects_namespaceObject) {
        const card = createCard(project);
        wrapper.appendChild(card);
    }

    parent.appendChild(wrapper);
}

function createCard(project) {
    const card = document.createElement("article");
    card.classList.add("card");

    const imgSection = createImgSection(project);
    card.appendChild(imgSection);

    const infoSection = createInfoSection(project);
    card.appendChild(infoSection);

    return card;
}

function createImgSection(project) {
    const container = document.createElement("div");
    container.classList.add("card-img-container");

    const img = document.createElement("img");
    img.src = cache["./" + project.imageFileName];
    img.loading = "lazy";
    container.appendChild(img);

    return container;
}

function createInfoSection(project) {
    const info = document.createElement("div");
    info.classList.add("card-info");

    const infoTitle = document.createElement("p");
    infoTitle.classList.add("card-info-title");
    infoTitle.textContent = project.title;
    info.appendChild(infoTitle);

    const infoDescription = document.createElement("p");
    infoDescription.classList.add("card-info-desc");
    infoDescription.textContent = project.description;
    info.appendChild(infoDescription);

    const infoStack = document.createElement("div");
    infoStack.classList.add("card-info-stack");

    for (const tech of project.stack) {
        const pill = document.createElement("div");
        pill.textContent = tech;
        infoStack.appendChild(pill);
    }

    info.appendChild(infoStack);

    return info;
}

;// ./src/assets/js/index.js









const content = document.getElementById("content");
const router = new Router(content);
router.addRoute("/", loadHome);
router.addRoute("/projects", loadProjects);

const navigation = new NavigationManager(router);
navigation.initialize();

})();

/******/ })()
;