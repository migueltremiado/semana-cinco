"use strict";

function adivinaPass() {
  let result1 = (Math.random() * 100).toFixed(0);
  console.log(result1);
  let numUser = prompt("Introduce un número del 0 al 100");

  for (let intentos = 0; intentos < 5; intentos++) {
    if (numUser === result1) {
      alert("You win!!!!");
      break;
    } else if (numUser < 0 || numUser > 100 || numUser === null) {
      numUser = prompt("error, solo de 0 a 100!! X.(");
    } else {
      if (numUser > result1) {
        numUser = prompt("el numero que buscas es menor");
      } else {
        numUser = prompt("el numero que buscas es mayor");
      }
    }
    if (intentos === 4) {
      alert("You are loser!!!" + " el numero buscado era el " + result1);
    }
  }
}
adivinaPass();
