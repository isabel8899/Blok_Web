/*Elementen uit html ophalen*/
var deButton = document.querySelector("img:nth-child(2)");
var deNav = document.querySelector(".navigatie")
var buttonGroter = document.querySelector("button:first-of-type")
var main = document.querySelector("main")
var muziek = document.querySelector("button:last-of-type")
var audio = document.querySelector("audio")
var donker = document.querySelector(".maan")
var body = document.querySelector("body")

/*functie koppelen aan knop als je klikt*/
deButton.addEventListener("click", toggleMenu);
buttonGroter.addEventListener("click", groter)
muziek.addEventListener("click", geluid)
donker.addEventListener("click", thema)

/*verschijning van het hamburger menu*/
function toggleMenu() {
  deNav.classList.toggle("toonMenu");
}

/*vergroting van de tekst*/
function groter () {
    main.classList.toggle("groter")
}

/*Geluid aan*/
function geluid () {
  audio.play();
}   

/*Verandering kleuren naar donker thema*/
function thema () {
  body.classList.toggle("kleuren")
}
