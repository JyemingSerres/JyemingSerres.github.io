import "../../css/projects.css";

import projects from "../../data/projects/projects.json";

import { TRANSLATE_KEY } from "../managers/translator.js";


const cache = {};

function importAll(r) {
    r.keys().forEach((key) => (cache[key] = r(key)));
}

// imports all images links, see https://webpack.js.org/guides/dependency-management/#context-module-api
// eslint-disable-next-line no-undef
importAll(require.context("../../data/projects/images/", false, /\.(png|jpg|jpeg)$/));


export default function loadProjects() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("card-wrapper");

    for (const project of projects) {
        const card = createCard(project);
        wrapper.prepend(card);
    }

    return wrapper;
}

function createCard(project) {
    const card = document.createElement("article");
    card.classList.add("card");

    const imgSection = createImgSection(project);
    card.appendChild(imgSection);

    const infoSection = createInfoSection(project);
    card.appendChild(infoSection);

    return card;
}

function createImgSection(project) {
    const container = document.createElement("div");
    container.classList.add("card-img-container");

    const img = document.createElement("img");
    img.src = cache["./" + project.imageFileName];
    img.loading = "lazy";
    container.appendChild(img);

    return container;
}

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
