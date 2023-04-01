// let counter = 0;

// while (counter !== 5) {
//   console.log('ainda é menor que cinco');
//   counter += 1;
// }

// console.log('finalizou o loop');

const dado1 = Math.ceil(Math.random() * 6);
console.log(`o dado 1 teve valor = ${dado1}`);

let dado2 = Math.ceil(Math.random() * 6);

while (dado1 !== dado2) {
  dado2 = Math.ceil(Math.random() * 6);
  console.log(`o dado 2 teve valor = ${dado2}`);
} 

console.log(`Finalmente os valores são iguais.
Dado 1 = ${dado1}
Dado 2 = ${dado2}`);