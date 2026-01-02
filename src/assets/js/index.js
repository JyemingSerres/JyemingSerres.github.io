import "../css/global.css";

import Router from "./managers/routing";
import loadHome from "./pages/home";
import loadProjects from "./pages/projects";

const content = document.getElementById("content");

const router = new Router(content);
router.addRoute("/", loadHome);
router.addRoute("/projects", loadProjects);

const elem = document.getElementById("test");
router.addNavigation(elem, "/");
const elem2 = document.getElementById("test2");
router.addNavigation(elem2, "/projects");