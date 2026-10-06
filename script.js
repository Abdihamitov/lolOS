function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes().padStart(2, "0"))
    const time = hours + ":" + minutes;

    document.getElementById("clock").textContent = time;
}

updateClock();

setInterval(updateClock, 1000);

const appIcons = document.querySelectorAll("[data-open]");

const closeButtons = document.querySelectorAll("[data-close]");


appIcons.forEach(function(icon) {

    icon.addEventListener("dblclick", function() {

        const windowId = icon.dataset.open;

        const appWindow = document.getElementById(windowId);

        appWindow.style.display = "flex";

    });

});


closeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        const windowId = button.dataset.close;

        const appWindow = document.getElementById(windowId);

        appWindow.style.display = "none";

    });

});