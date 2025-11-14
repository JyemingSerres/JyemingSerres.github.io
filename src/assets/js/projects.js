import "../css/global.css";
import "../css/projects.css";

import projects from "../data/projects/projects.json";

const cache = {};

function importAll(r) {
  r.keys().forEach((key) => (cache[key] = r(key)));
}

importAll(require.context("../data/projects/images/", false, /\.png$/, 'lazy'));
// imports all images at build time, see https://webpack.js.org/guides/dependency-management/#context-module-api

console.log(projects);
console.log(cache);