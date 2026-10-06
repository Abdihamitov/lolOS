function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes().padStart(2, "0"))
    const time = hours + ":" + minutes;

    document.getElementById("clock").textContent = time;
}

updateClock();

setInterval(updateClock, 1000);