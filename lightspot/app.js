const container = document.querySelector(".container");
const overlay = document.querySelector(".overlay");
const spot = document.querySelector(".spot");

const zone = { left: 1056, right: 1072, top: 520, bottom: 542 };
let dark = true;

function inZone (event) {
    const x = event.offsetX;
    const y = event.offsetY;

    return x > zone.left && x < zone.right && y > zone.top && y < zone.bottom
}

function enterLabo (event) {
    // container.style.cursor = "default";
    if(!dark) return;
    container.style.cursor = "none";
    overlay.style.opacity = 0;
    container.style.setProperty("--x", event.offsetX+"px")
    container.style.setProperty("--y", event.offsetY+"px")
}

function leaveLabo () {
    if(!dark) return;
    overlay.style.opacity = 1;
}


function lightOn () {
    container.style.cursor = "default"
    overlay.style.opacity = 0;
    spot.style.background = "none";
    dark = false;
}

function lightOff () {
    container.style.cursor = "none";
    overlay.style.opacity = 1;
    spot.style.background = "radial-gradient(circle at var(--x) var(--y), transparent 40px, rgb(22, 22, 22) 80px)";
    dark = true;
}

function handleClick (event) {
   if(!inZone(event)) return;
   dark ? lightOn() : lightOff();
}

container.addEventListener("mousemove", enterLabo);
container.addEventListener("mouseleave", leaveLabo);

container.addEventListener("click", handleClick);

