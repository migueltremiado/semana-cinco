"use strict";

// puntuaciones
const puntuaciones = [
  {
    equipo: "Toros Negros",
    puntos: [1, 3, 4, 2, 10, 8],
  },
  {
    equipo: "Amanecer Dorado",
    puntos: [8, 5, 2, 4, 7, 5, 3],
  },
  {
    equipo: "Águilas Plateadas",
    puntos: [5, 8, 3, 2, 5, 3],
  },
  {
    equipo: "Leones Carmesí",
    puntos: [5, 4, 3, 1, 2, 3, 4],
  },
  {
    equipo: "Rosas Azules",
    puntos: [2, 1, 3, 1, 4, 3, 4],
  },
  {
    equipo: "Mantis Verdes",
    puntos: [1, 4, 5, 1, 3],
  },
  {
    equipo: "Ciervos Celestes",
    puntos: [3, 5, 1, 1],
  },
  {
    equipo: "Pavos Reales Coral",
    puntos: [2, 3, 2, 1, 4, 3],
  },
  {
    equipo: "Orcas Moradas",
    puntos: [2, 3, 3, 4],
  },
];

function clasificacionEquipos(listaEquipos) {
  listaEquipos.forEach((equipo, index) => {
    const puntuacionesTotalesEquipo = equipo.puntos.reduce(
      (acc, puntos) => acc + puntos
    );

    listaEquipos[index].puntosTotales = puntuacionesTotalesEquipo;
  });
  console.log(listaEquipos);

  const puntuacionesOrdenadas = listaEquipos.sort(
    (a, b) => b.puntosTotales - a.puntosTotales
  );
  console.log(puntuacionesOrdenadas);

  console.log(
    "el equipo con mas puntuacion tiene " +
      puntuacionesOrdenadas[0].puntosTotales +
      " puntos" +
      " y su nombre es " +
      puntuacionesOrdenadas[0].equipo
  );
  console.log(
    "el equipo con menos puntuacion tiene " +
      puntuacionesOrdenadas[puntuacionesOrdenadas.length - 1].puntosTotales +
      " puntos" +
      " y su nombre es " +
      puntuacionesOrdenadas[puntuacionesOrdenadas.length - 1].equipo
  );
}
clasificacionEquipos(puntuaciones);
