// JavaScript Dictionary System for dynamic app loading
const appsList = [
    { name: "Gmail", image: "assets/gmail.png", url: "https://mail.google.com" },
    { name: "Drive", image: "assets/drive.png", url: "https://drive.google.com" },
    { name: "Docs", image: "assets/docs.png", url: "https://docs.google.com" },
    { name: "Slides", image: "assets/slides.png", url: "https://slides.google.com" },
    { name: "Sheets", image: "assets/sheets.png", url: "https://sheets.google.com" },
    { name: "Forms", image: "assets/forms.png", url: "https://forms.google.com" },
    { name: "Sites", image: "assets/sites.png", url: "https://sites.google.com" },
    { name: "Calendar", image: "assets/calendar.png", url: "https://calendar.google.com" },
    { name: "Tasks", image: "assets/tasks.png", url: "https://tasks.google.com" },
    { name: "YouTube", image: "assets/youtube.png", url: "https://youtube.com" }
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

});
