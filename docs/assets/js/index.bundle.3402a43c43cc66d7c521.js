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

;// ./src/assets/js/managers/selector.js
class Selector {
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

;// ./src/assets/data/translations.json
const translations_namespaceObject = /*#__PURE__*/JSON.parse('{"en":{"nav-home":"Home","nav-projects":"Projects","home-status":"Software engineering student at Polytechnique Montréal","github-proj-button-text":"source code","001-title":"Projection of 3D Shapes","001-description":"The goal of this exercise is to display 3D shapes onto a 2D screen. Using mouse and keyboard inputs, the user is able to traverse space to inspect objects at various angles.","002-title":"Portfolio Website","002-description":"A single-page website to present my personnal projects."},"fr":{"nav-home":"Accueil","nav-projects":"Projets","home-status":"Étudiant en génie logiciel à Polytechnique Montréal","github-proj-button-text":"code source","001-title":"Projection de formes 3D","001-description":"Le but de cet exercice est d\'afficher des formes 3D sur un écran 2D. En utilisant la souris et le clavier, l\'utilisateur peut parcourir l\'espace afin d\'examiner les objects sous différents angles.","002-title":"Site web portfolio","002-description":"Un site web monopage pour présenter mes projets personnels"}}');
;// ./src/assets/js/managers/translator.js



const TRANSLATE_KEY = "trnsl";

class Translator {
    constructor() {
        this.languages = ["en", "fr"];
        this.lang = document.querySelector("html").lang;

        this.#selectBrowserLang();
        this.updateDomTexts();
    }

    /**
     * Attempts to change the current language and updates the DOM on success.
     * @param {string} newLang - The new language.
     * @returns {void}
     */
    changeLang(newLang) {
        if (!this.languages.includes(newLang)) return;
        if (newLang === this.lang) return;

        this.lang = newLang;
        this.updateDomTexts();
    }

    /**
     * Selects the browser's most preferred language if possible.
     * @private
     * @returns {void}
     */
    #selectBrowserLang() {
        for (const language of navigator.languages) {
            const candidate = language.split("-")[0];
            if (this.languages.includes(candidate) && candidate !== this.lang)
                this.lang = candidate;
        }
    }

    /**
     * Updates texts currently in the DOM.
     * @returns {void}
     */
    updateDomTexts() {
        this.updateTexts(document);
    }

    /**
     * Updates the elements affected by i18n within a parent element with to the current language.
     * @param {HTMLElement} parent - The parent element to update.
     * @returns {void}
     */
    updateTexts(parent) {
        const elements = parent.querySelectorAll("[data-" + TRANSLATE_KEY + "]");
        for (const element of elements) {
            const key = element.dataset[TRANSLATE_KEY];
            element.textContent = translations_namespaceObject[this.lang][key] || key;
        }
    }
}

;// ./src/assets/js/pages/page.js
class Page {
    /**
     * @param {function} loader
     * @param {Translator} translator
     */
    constructor(loader, translator) {
        this.loader = loader;
        this.cache = undefined;
        this.translator = translator;
        this.lang = undefined;
    }

    /**
     * Generates the page or retrieves it from the cache. Language is updated.
     * @returns {HTMLElement} Element of the page.
     */
    getContent() {
        if (this.cache === undefined)
            this.cache = this.loader();
        this.#updateLang();
        return this.cache;
    }

    /**
     * Updates the page's texts with the correct language if needed.
     * @private
     * @returns {void}
     */
    #updateLang() {
        if (this.lang === this.translator.lang) return;
        
        this.translator.updateTexts(this.cache);
    }
}

;// ./src/assets/js/pages/home.js





/**
 * Generates the Home page.
 * @returns {HTMLDivElement} Element containing the page's content.
 */
function loadHome() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("front-text-wrapper");

    const name = document.createElement("div");
    name.classList.add("front-name");
    name.textContent = "Jye-Ming Serres";
    wrapper.appendChild(name);

    const status = document.createElement("div");
    status.classList.add("front-status");
    status.dataset[TRANSLATE_KEY] = "home-status";
    wrapper.appendChild(status);

    return wrapper;
}

;// ./src/assets/data/projects/projects.json
const projects_namespaceObject = /*#__PURE__*/JSON.parse('[{"id":1,"title":"001-title","description":"001-description","year":"2025","imageFileName":"projection-of-3D-shapes.png","githubLink":"https://github.com/JyemingSerres/projection-of-3D-shapes","stack":["Python"]},{"id":2,"title":"002-title","description":"002-description","year":"2026","imageFileName":"portfolio-website.png","githubLink":"https://github.com/JyemingSerres/JyemingSerres.github.io","stack":["HTML","CSS","JS","Webpack"]}]');
;// ./src/assets/js/pages/projects.js







const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}
// imports all image links, see https://webpack.js.org/guides/dependency-management/#context-module-api
importAll(__webpack_require__(868)); // eslint-disable-line no-undef


/**
 * @typedef {Object} Project
 * @property {number} id - Unique project id.
 * @property {string} title - Project title i18n key.
 * @property {string} description - Project description i18n key.
 * @property {string} year - Year the project was mostlty developped.
 * @property {string} imageFileName - Project image file name.
 * @property {string} githubLink - Github link to the project source.
 * @property {Array<string>} stack - Tech stack used in the project.
 */


/**
 * Generates the Projects page and its cards.
 * @returns {HTMLDivElement} Element containing the page's content.
 */
function loadProjects() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");

    for (const project of projects_namespaceObject) {
        const card = createCard(project);
        wrapper.prepend(card);
    }

    return wrapper;
}

/**
 * Generates a card containing a project's data.
 * @param {Project} project - The project's data.
 * @returns {HTMLElement} Element of the card.
 */
function createCard(project) {
    const card = document.createElement("article");
    card.classList.add("card");

    const imgSection = createImgSection(project.imageFileName);
    card.appendChild(imgSection);

    const infoSection = createInfoSection(project);
    card.appendChild(infoSection);

    return card;
}

/**
 * Generates the image section of the card.
 * @param {string} imageFileName - Filename of the project's image.
 * @returns {HTMLDivElement} Element with the image.
 */
function createImgSection(imageFileName) {
    const container = document.createElement("div");
    container.classList.add("card-img-container");

    const img = document.createElement("img");
    img.src = cache["./" + imageFileName];
    img.loading = "lazy";
    container.appendChild(img);

    return container;
}

/**
 * Generates the info section of the card.
 * @param {Project} project - The project's data.
 * @returns {HTMLDivElement} Element with data about the project.
 */
function createInfoSection(project) {
    const info = document.createElement("div");
    info.classList.add("card-info");

    const head = document.createElement("div");
    head.classList.add("card-info-head");

    const infoTitle = document.createElement("span");
    infoTitle.classList.add("card-info-title");
    infoTitle.dataset[TRANSLATE_KEY] = project.title;
    head.appendChild(infoTitle);

    const infoDate = document.createElement("span");
    infoDate.classList.add("card-info-date");
    infoDate.textContent = project.year;
    head.appendChild(infoDate);

    info.appendChild(head);

    const infoDescription = document.createElement("p");
    infoDescription.classList.add("card-info-desc");
    infoDescription.dataset[TRANSLATE_KEY] = project.description;
    info.appendChild(infoDescription);

    const infoStack = document.createElement("ul");
    infoStack.classList.add("card-info-stack");

    for (const tech of project.stack) {
        const pill = document.createElement("li");
        pill.textContent = tech;
        infoStack.appendChild(pill);
    }

    info.appendChild(infoStack);

    const githubButton = createGithubButton(project.githubLink);
    info.appendChild(githubButton);

    return info;
}

/**
 * Generates a button that opens the project's Github link.
 * @returns {HTMLAnchorElement} Element of the button.
 */
function createGithubButton(uri) {
    const namespace = "http://www.w3.org/2000/svg";

    const button = document.createElement("a");
    button.classList.add("github-url");
    button.href = uri;
    button.target = "_blank";

    const icon = document.createElementNS(namespace, "svg");
    icon.classList.add("github-icon");
    icon.setAttribute("viewBox", "0 0 512 512");

    const strokePath = document.createElementNS(namespace, "path");
    strokePath.setAttribute("fill", "currentColor");
    strokePath.setAttribute("d", "M173.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM252.8 8c-138.7 0-244.8 105.3-244.8 244 0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1 100-33.2 167.8-128.1 167.8-239 0-138.7-112.5-244-251.2-244zM105.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9s4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z");

    icon.appendChild(strokePath);

    button.appendChild(icon);

    const buttonText = document.createElement("span");
    buttonText.dataset[TRANSLATE_KEY] = "github-proj-button-text";
    button.appendChild(buttonText);
    return button;
}

;// ./src/assets/js/index.js











const translator = new Translator();
const homePage = new Page(loadHome, translator);
const projectsPage = new Page(loadProjects, translator);

const contentDest = document.getElementById("content");
const router = new Router(contentDest);
router.addRoute("/", homePage);
router.addRoute("/projects", projectsPage);


const navigationSelector = new Selector("nav-link", "route");
navigationSelector.setAction((route) => router.navigateTo(route));

const languageSelector = new Selector("lang-button", "lang");
languageSelector.setAction((lang) => translator.changeLang(lang));
languageSelector.setDefault(translator.lang);

})();

/******/ })()
;