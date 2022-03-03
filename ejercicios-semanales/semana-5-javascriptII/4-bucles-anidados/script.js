"use strict";

const catalogo = [
  "margarita",
  "cuatro quesos",
  "prosciutto",
  "carbonara",
  "barbacoa",
  "tropical",
];

function cat(x) {
  let combinaciones = [];

  for (let i = 0; i < x.length; i++) {
    for (let j = i + 1; j < x.length; j++) {
      combinaciones.push(x[i] + " y " + x[j]);
    }
  }
  return combinaciones;
}

console.log(cat(catalogo));
