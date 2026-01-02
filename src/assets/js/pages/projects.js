import "../../css/projects.css";

import projects from "../../data/projects/projects.json";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

// imports all images at build time, see https://webpack.js.org/guides/dependency-management/#context-module-api
importAll(require.context("../../data/projects/images/", false, /\.png$/, 'lazy'));


export default function loadProjects(parent) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");

    for (const project of projects) {
        console.log(project);
        const proj = document.createElement("div");
        proj.classList.add("card");

        const img = document.createElement("img");
        cache["./" + project.imageFileName].then((link) => {
            img.src = link;
        });
        proj.appendChild(img);

        wrapper.appendChild(proj);
    }

    parent.appendChild(wrapper);
}
