import "../css/global.css";

import Router from "./managers/routing.js";
import Selector from "./managers/selector.js";
import Translator from "./managers/translator.js"

import Page from "./pages/page.js"
import loadHome from "./pages/home.js";
import loadProjects from "./pages/projects.js";


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
