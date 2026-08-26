// JavaScript Dictionary System for dynamic app loading
const appsList = [
    { name: "Outlook", image: "assets/outlook.png", url: "https://outlook.cloud.microsoft/mail/" },
    { name: "OneDrive", image: "assets/onedrive.png", url: "https://apsva-my.sharepoint.com/" },
    { name: "Word", image: "assets/word.png", url: "https://word.cloud.microsoft/" },
    { name: "PowerPoint", image: "assets/powerpoint.png", url: "https://powerpoint.cloud.microsoft/" },
    { name: "Excel", image: "assets/excel.png", url: "https://excel.cloud.microsoft/" },
    { name: "OneNote", image: "assets/onenote.png", url: "https://onenote.cloud.microsoft/" },
    { name: "Forms", image: "assets/forms.png", url: "https://forms.office.com/" },
    { name: "SharePoint", image: "assets/sharepoint.png", url: "https://apsva-my.sharepoint.com/" },
    { name: "Clipchamp", image: "assets/clipchamp.png", url: "https://apsva.sharepoint.com/_layouts/15/videohub.aspx" },
    { name: "Teams", image: "assets/teams.png", url: "https://teams.cloud.microsoft/" },

];

document.addEventListener("DOMContentLoaded", () => {
    const appsGrid = document.getElementById("apps-grid");

    // Render apps from dictionary
    appsList.forEach(app => {
        const appLink = document.createElement("a");
        appLink.href = app.url;
        appLink.className = "app-item";
        appLink.target = "_blank";
        appLink.setAttribute("aria-label", app.name);

        appLink.innerHTML = `
            <img class="app-icon" src="${app.image}" alt="${app.name}">
        `;
        
        appsGrid.appendChild(appLink);
    });

    // move footer text to the bottom of the page, not screen, if the content is short
    const footer = document.querySelector(".footer");
    const mainContent = document.querySelector("main");
    if (mainContent.offsetHeight + footer.offsetHeight < window.innerHeight) {
        footer.style.position = "absolute";
        footer.style.bottom = "0";
        footer.style.width = "100%";
    }
});
