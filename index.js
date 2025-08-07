function openMenu() {
    const menu = document.querySelector(".hamburger-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}


/*
const button = document.getElementById("theme-toggle");
button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
*/