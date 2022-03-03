"use strict";

const names = [
  "A-Jay",
  "Manuel",
  "Manuel",
  "Eddie",
  "A-Jay",
  "Su",
  "Reean",
  "Manuel",
  "A-Jay",
  "Zacharie",
  "Zacharie",
  "Tyra",
  "Rishi",
  "Arun",
  "Kenton",
];

//console.log(new Set(names));

function duplicados(x) {
  return new Set(x);
}
const sinDuplicados = duplicados(names);
console.log(sinDuplicados);

//console.log(duplicados(names));
