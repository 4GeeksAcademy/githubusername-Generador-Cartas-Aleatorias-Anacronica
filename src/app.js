/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
import { read } from "@popperjs/core";

window.onload = function() {
  const cambioDeNumero = () => {
    let numeroAleatreo = Math.floor(Math.random() * 13 + 1);
    if (numeroAleatreo === 11) {
      numeroAleatreo = "J";
    } else if (numeroAleatreo === 12) {
      numeroAleatreo = "Q";
    } else if (numeroAleatreo === 13) {
      numeroAleatreo = "K";
    } else if (numeroAleatreo === 1) {
      numeroAleatreo = "A";
    }
    return numeroAleatreo;
  };
  document.querySelector(".card-text").textContent = cambioDeNumero();

  const cambioDeFigura = () => {
    let cambiodeColorT = document.querySelector(".paloTop");
    let cmabiodeColorB = document.querySelector(".paloBottom");
    let figuraAleator = ["♦", "♥", "♠", "♣"];
    const numeroAleatreo = Math.floor(Math.random() * figuraAleator.length);
    console.log(numeroAleatreo);
    if (numeroAleatreo === 1) {
      cambiodeColorT.style.color = "red";
      cmabiodeColorB.style.color = "red";
    } else if (numeroAleatreo === 0) {
      cambiodeColorT.style.color = "blue";
      cmabiodeColorB.style.color = "blue";
    } else if (numeroAleatreo === 3) {
      cambiodeColorT.style.color = "green";
      cmabiodeColorB.style.color = "green";
    }
    return figuraAleator[numeroAleatreo];
  };
  const paloTopBot = cambioDeFigura();
  document.querySelector(".paloTop").textContent = paloTopBot;
  document.querySelector(".paloBottom").textContent = paloTopBot;
};
