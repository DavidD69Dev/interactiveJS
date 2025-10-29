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