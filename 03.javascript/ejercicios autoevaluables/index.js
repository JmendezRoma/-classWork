"use strict";

const pizzas = [
  'margarita',
  'cuatro quesos',
  'prosciutto',
  'carbonara',
  'barbacoa',
  'tropical',
];

function combine(pizzas) {
  const combinations = [];

  // Escribe aquí tu código
  for (let i = 0; i < pizzas.length -1 ; i++) {
    for (let j = i + 1; j < pizzas.length; j++) {
      combinations.push(`${pizzas[i]} y ${pizzas[j]}`);
    }
  }
  return combinations;
}
console.log(combine(pizzas));
