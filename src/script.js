function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector("header");
    const top__main = document.querySelector("top__main");
    if (header && top__main) {
        const headerHeight = header.offsetHeight;
        top__main.style.marginTop = `${headerHeight}px`;
    }
});
