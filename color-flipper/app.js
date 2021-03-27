
const appMain = document.getElementById("app-main")
const btn = document.getElementById("btn")
const color = document.getElementById("color")

const colorList = ["red", "green", "coral", "blue", "purple"]

btn.addEventListener('click', () => {
    const randomNumber = Math.round(Math.random() * 4)
    console.log(randomNumber)

    appMain.style.backgroundColor = colorList[randomNumber]
    color.innerText = colorList[randomNumber].toUpperCase()
})