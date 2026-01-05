import "../css/global.css";

import Router from "./managers/routing.js";
import Selector from "./managers/selector.js";
import Translator from "./managers/translator.js"

import loadHome from "./pages/home.js";
import loadProjects from "./pages/projects.js";


const pageContent = document.getElementById("content");
const router = new Router(pageContent);
router.addRoute("/", loadHome);
router.addRoute("/projects", loadProjects);

const navigationSelector = new Selector("nav-link", "route");
navigationSelector.setAction((route) => router.navigateTo(route));

const languageSelector = new Selector("lang-button", "lang");
const translator = new Translator(languageSelector.getOptions());
languageSelector.setAction((lang) => translator.changeLang(lang));
languageSelector.setDefault(translator.lang);
