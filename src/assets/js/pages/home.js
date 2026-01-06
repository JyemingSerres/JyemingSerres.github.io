import "../../css/home.css";

import { TRANSLATE_KEY } from "../managers/translator.js";


/**
 * Generates the Home page.
 * @returns {HTMLDivElement} Element containing the page's content.
 */
export default function loadHome() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("front-text-wrapper");

    const name = document.createElement("div");
    name.classList.add("front-name");
    name.textContent = "Jye-Ming Serres";
    wrapper.appendChild(name);

    const status = document.createElement("div");
    status.classList.add("front-status");
    status.dataset[TRANSLATE_KEY] = "home-status";
    wrapper.appendChild(status);

    return wrapper;
}
