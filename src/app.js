/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function principal() {
  // Write your code here
  let miTitulo = document.querySelector("#title");
  miTitulo.innerHTML = 'Random Card Generator';
  document.querySelector('#foother').innerHTML = 'Con mucho  ❤️  para la cohorte Spain-44';

  let suit = ['♦', '♥', '♠', '♣'];
  let numbers = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

  let indexSuit = Math.floor(Math.random() * suit.length);
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  
  let classBG = '';
  (suit[indexSuit] == '♦' || suit[indexSuit] == '♥' ) ? classBG = "leter-red" : classBG = "leter-black";

  let suitTop = document.querySelector(".top")
  let suitEnd = document.querySelector(".end")
  let numberCard = document.querySelector(".number")

  suitTop.innerHTML = suit[indexSuit]
  suitEnd.innerHTML = suit[indexSuit]
  numberCard.innerHTML = numbers[indexNumbers]

  let currentClass = suitTop.classList[1]
  suitTop.classList.remove(currentClass)
  suitTop.classList.add(classBG)
  suitEnd.classList.remove(currentClass)
  suitEnd.classList.add(classBG)
  numberCard.classList.remove(currentClass)
  numberCard.classList.add(classBG)

  console.log("Hello Rigo from the console!");
};

