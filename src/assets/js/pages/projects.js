import "../../css/projects.css";

import projects from "../../data/projects/projects.json";

const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

// imports all images at build time, see https://webpack.js.org/guides/dependency-management/#context-module-api
importAll(require.context("../../data/projects/images/", false, /\.png$/));


export default function loadProjects(parent) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");

    for (const project of projects) {
        const card = document.createElement("div");
        card.classList.add("card");

        const container = document.createElement("div");
        container.classList.add("card-img-container");

        const img = document.createElement("img");
        img.src = cache["./" + project.imageFileName];
        img.loading = "lazy";
        container.appendChild(img);

        card.appendChild(container);

        const info = document.createElement("div");
        info.classList.add("card-info");

        const infoTitle = document.createElement("p");
        infoTitle.classList.add("card-info-title");
        infoTitle.textContent = project.projectName;
        info.appendChild(infoTitle);

        const infoDescription = document.createElement("p");
        infoDescription.classList.add("card-info-desc");
        infoDescription.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
        info.appendChild(infoDescription);

        const infoStack = document.createElement("div");
        infoStack.classList.add("card-info-stack");

        for (const tech of project.stack) {
            const pill = document.createElement("div");
            pill.textContent = tech;
            infoStack.appendChild(pill);
        }

        info.appendChild(infoStack);

        card.appendChild(info);

        wrapper.appendChild(card);
    }

    parent.appendChild(wrapper);
}
