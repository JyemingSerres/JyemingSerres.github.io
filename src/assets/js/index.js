import "../css/global.css";

import Router from "./managers/routing";
import home from "./pages/home";
import "./pages/projects";

const content = document.getElementById("content");

const router = new Router(content);
router.addRoute("/", home);
router.addRoute("/projects", () => {content.textContent = "projects"});

const elem = document.getElementById("test");
router.addNavigation(elem, "/");
const elem2 = document.getElementById("test2");
router.addNavigation(elem2, "/projects");