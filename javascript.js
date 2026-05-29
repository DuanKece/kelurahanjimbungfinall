let lastScroll = 0;
const navbar = document.querySelector(".navbar-wrapper");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll) {
        navbar.classList.add("navbar-hide");
    } else {
        navbar.classList.remove("navbar-hide");
    }

    lastScroll = currentScroll;
});

const navToggle = document.getElementById("navToggle");
const navbarMenu = document.getElementById("navbarMenu");

navToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
});
