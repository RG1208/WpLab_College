// Document Object
const documentBtn = document.querySelector(".documentBtn")
const left = document.querySelector(".left")

documentBtn.addEventListener("click", function () {
    alert("Button Clicked")
})

const documentDiv = document.createElement('div')
documentDiv.innerHTML = "This is a div Created Using DOM"
left.appendChild(documentDiv)
documentDiv.classList = "documentDiv"
documentDiv.style.backgroundColor = "rgb(255, 179, 184)"
documentDiv.style.padding = "20px"
documentDiv.style.marginRight = "415px"
documentDiv.style.fontSize = "20px"
documentDiv.style.borderRadius = "30px"
documentDiv.style.marginTop = "20px"


document.title = "Rachit EXP6"

const documentBtn1 = document.createElement('Button')
documentBtn1.innerHTML = "Button created Using DOM, Double Click to add a Para"
documentBtn1.classList = "documentBtn1"
left.appendChild(documentBtn1)

documentBtn1.addEventListener("dblclick", function () {

    const P = document.createElement('p')
    P.innerHTML = "This is a para Created by double Click button"
    left.appendChild(P)
    P.classList = "para"
    P.style.backgroundColor = "rgb(177, 255, 161)"
    P.style.padding = "15px"
    P.style.marginRight = "300px"
    P.style.fontSize = "20px"
    P.style.borderRadius = "30px"
    P.style.marginTop = "20px"
}
)

// Window Object
const windowBtn = document.querySelector(".windowBtn")
const right = document.querySelector(".right")
const link = document.querySelector(".link")
const height = document.querySelector(".height")
const width = document.querySelector(".width")

windowBtn.addEventListener("click", function () {
    window.alert("Welcome to the page!");
})

link.addEventListener("click", function () {
    const getLink = window.location.href
    const Div = document.createElement('div')
    Div.classList = "textDiv"
    Div.innerHTML = `Current URL of the Page is:    ${getLink}`
    right.appendChild(Div)
})
height.addEventListener("click", function () {
    const getHeight = window.innerHeight
    const Div = document.createElement('div')
    Div.classList = "textDiv"
    Div.innerHTML = `Inner Height of the browser is:    ${getHeight}`
    right.appendChild(Div)
})
width.addEventListener("click", function () {
    const getWidth = window.innerWidth
    const Div = document.createElement('div')
    Div.classList = "textDiv"
    Div.innerHTML = `Inner Width of the browser is:    ${getWidth}`
    right.appendChild(Div)
})
