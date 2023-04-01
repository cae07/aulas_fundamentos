// && => AND
// || => OR
// ! => NOT

const arroz = true;
const feijao = true;
const leite = false;
const farinha = true;
const frutas = true;

if (arroz && feijao && farinha && frutas || leite) {
  console.log('minha lista de compras esta completa');
} else {
  console.log('faltou algum alimento na minha lista');
}