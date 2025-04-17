import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  generarCarta();
  setInterval(generarCarta, 10000)
};

function generarCarta() {
  let values = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
  let iconos = ["♦", "♥", "♠", "♣"]
  let randomValue = Math.floor(Math.random() * values.length)
  let randomIcons = Math.floor(Math.random() * iconos.length)

  document.querySelector(".top-item").innerHTML = iconos[randomIcons]
  document.querySelector(".botom-item").innerHTML = iconos[randomIcons]
  document.querySelector(".number").innerHTML = values[randomValue]
  document.querySelector(".botom-item").style.color = randomIcons <= 1 ? "red" : "black";
  document.querySelector(".top-item").style.color = randomIcons <= 1 ? "red" : "black";

  const ancho = document.getElementById("tamano");
  const alto = document.getElementById("altura");
  const card = document.querySelector(".contanier-card");

  ancho.addEventListener("input", () => {card.style.width = ancho.value + "px";});
  alto.addEventListener("input", () => {card.style.height = alto.value + "px";});
}

