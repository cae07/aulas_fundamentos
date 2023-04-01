const alimento = 'Arroz'; // => variavel simples
const listaDeCompras = ['Arroz', 'Feijão', 'Farinha', 'Leite', 'Frutas']; // variavel composta

const riceIndex = listaDeCompras.indexOf('Frutas');
listaDeCompras[listaDeCompras.length] = 'Chocolate';

listaDeCompras.push('Carne moída');

// console.log(`O indice do Frutas é = ${riceIndex}`);
// console.log(listaDeCompras);

const arraySize = listaDeCompras.length;

// console.log(arraySize);

const lastItem = listaDeCompras[listaDeCompras.length - 1];

console.log(lastItem);