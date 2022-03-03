"use strict";

const people = {
  Maria: 20,
  Ana: 14,
  Luis: 16,
  Pepe: 35,
  Manuel: 50,
  Teresa: 12,
  Daniel: 27,
  Irene: 23,
  Alex: 10,
};

// const arrayDePeople = Object.entries(people);
// for (const [key, value] of arrayDePeople) {
//   if (value >= 18) {
//     console.log(key + " es mayor de edad");
//   } else {
//     console.log(key + " es menor de edad");
//   }
// }

edades(people);

function edades(gente) {
  const arrayDePeople = Object.entries(gente);
  for (const [key, value] of arrayDePeople) {
    if (value >= 18) {
      console.log(key + " es mayor de edad");
    } else {
      console.log(key + " es menor de edad");
    }
  }
}
