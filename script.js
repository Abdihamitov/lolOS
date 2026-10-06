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


function makeDraggable(appWindow) {

    const header = appWindow.querySelector(".window-header");

    let offsetX = 0;
    let offsetY = 0;

    let dragging = false;


    header.addEventListener("mousedown", function(event) {

        dragging = true;

        offsetX = event.clientX - appWindow.offsetLeft;
        offsetY = event.clientY - appWindow.offsetTop;

    });


    document.addEventListener("mousemove", function(event) {

        if (!dragging) {
            return;
        }

        appWindow.style.left =
            event.clientX - offsetX + "px";

        appWindow.style.top =
            event.clientY - offsetY + "px";

    });


    document.addEventListener("mouseup", function() {

        dragging = false;

    });

}


const windows = document.querySelectorAll(".window");

windows.forEach(function(appWindow) {

    makeDraggable(appWindow);

});


