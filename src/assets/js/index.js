import "../css/global.css";

import Router from "./managers/routing";
import NavigationManager from "./managers/navigationManager";

import loadHome from "./pages/home";
import loadProjects from "./pages/projects";


const content = document.getElementById("content");
const router = new Router(content);
router.addRoute("/", loadHome);
router.addRoute("/projects", loadProjects);

const navigation = new NavigationManager(router);
navigation.initialize();
