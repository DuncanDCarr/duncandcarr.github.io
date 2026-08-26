// move the footer to the bottom of the page if the content is short
document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");
    const mainContent = document.querySelector(".error-content");
    if (mainContent && mainContent.offsetHeight + footer.offsetHeight < window.innerHeight) {
        footer.style.position = "absolute";
        footer.style.bottom = "0";
        footer.style.width = "100%";
    }
});