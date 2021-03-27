const hexMain = document.getElementById("hex-main")
const hexBtn = document.getElementById("hex-btn")
const hexColor = document.getElementById("hex-color")

const hexColorList = ["1", "2", "3", "4", "A", "B", "C", "D", "E", "F"]

hexBtn.addEventListener('click', () => {
    const hexValue = `#${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`

    hexMain.style.backgroundColor = hexValue
    hexColor.innerText = hexValue
})

const getRandomNumber = () => {
    return Math.round(Math.random() * (hexColorList.length - 1))
}