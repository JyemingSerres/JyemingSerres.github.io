document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const topTreshold = 10;

    window.addEventListener("scroll", function () {
        if (window.scrollY > topTreshold) {
            navbar.classList.remove("navbar-at-top");
        } else {
            navbar.classList.add("navbar-at-top");
        }
    });
});
