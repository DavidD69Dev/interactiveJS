import { colors } from "./datas/colors.js";

// console.log(colors);

// console.log(Math.random());
// console.log(Math.random()*5);
// console.log(Math.floor(Math.random()*5));

const randomNumber = Math.floor(Math.random()*colors.length);
console.log(randomNumber);

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