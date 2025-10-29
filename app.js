import { colors } from "./datas/colors.js";

const randomNumber = Math.floor(Math.random()*colors.length);

const root = document.documentElement

function applyTheme(index) {

    const theme = colors[index]
    root.style.setProperty("--main-bg-color", theme.mainBgColor)
    root.style.setProperty("--main-bg-card", theme.mainBgCard)
    root.style.setProperty("--main-text-color", theme.mainTextColor)
    root.style.setProperty("--main-shadow", theme.mainShadow)
    root.style.setProperty("--main-border", theme.mainBorder)
}

applyTheme(randomNumber)


const closeBtn = document.querySelector(".close-btn");
const navbar =document.querySelector(".navbar");
const btnBurger = document.querySelector(".btn-burger");

closeBtn.addEventListener("click", () => {
    navbar.classList.add("navbar-hidden")
})

btnBurger.addEventListener("click", () => {
    navbar.classList.remove("navbar-hidden")
})


const overlay = document.querySelector(".overlay");
const modale = document.querySelector(".modale");
const closeModale = document.querySelector(".closeModale");
const title = document.querySelector("h1");
title.style.cursor = "pointer"

function closeModaleFunction () {
    overlay.style.display = "none"
    modale.style.display = "none"
}

function openModaleFunction () {
    overlay.style.display = "block"
    modale.style.display= "flex"
}

closeModale.addEventListener("click", closeModaleFunction)
overlay.addEventListener("click", closeModaleFunction)
modale.addEventListener("click", event => event.stopPropagation())

title.addEventListener("click", openModaleFunction)
