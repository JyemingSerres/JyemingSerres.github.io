import "../css/global.css";

import Router from "./managers/routing";
import Selector from "./managers/selector";

import loadHome from "./pages/home";
import loadProjects from "./pages/projects";


const content = document.getElementById("content");
const router = new Router(content);
router.addRoute("/", loadHome);
router.addRoute("/projects", loadProjects);

const navigationSelector = new Selector("nav-link", "route");
navigationSelector.setAction((route) => router.navigateTo(route));

const languageSelector = new Selector("lang-button", "lang");
languageSelector.setAction((lang) => console.log(lang));
