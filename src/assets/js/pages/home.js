import "../../css/home.css";

export default function home(parent) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("front-text-wrapper");

    const name = document.createElement("div");
    name.classList.add("front-name");
    name.textContent = "Jye-Ming Serres";
    wrapper.appendChild(name);

    const status = document.createElement("div");
    status.classList.add("front-status");
    status.textContent = "Étudiant en génie logiciel à Polytechnique Montréal"; // TODO: i18n
    wrapper.appendChild(status);

    parent.appendChild(wrapper);
}