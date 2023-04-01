const mes = 'maio';
let estacaoDoAno = '?';

if (mes === 'janeiro' || mes === 'fevereiro' || mes === 'março') {
  estacaoDoAno = 'Verão';
} else if (mes === 'abril' || mes === 'maio' || mes === 'junho') {
  estacaoDoAno = 'Outono';
} else if (mes === 'julho' || mes === 'agosto' || mes === 'setembro') {
  estacaoDoAno = 'Inverno';
} else if (mes === 'outubro' || mes === 'novembro' || mes === 'dezembro') {
  estacaoDoAno = 'Primavera';
}

console.log(estacaoDoAno); // 'Outono'

// REFATORADO PARA UTILIZAR LISTAS

// const mes = 'maio';
// let estacaoDoAno = '?';
// const verao = ['janeiro', 'fevereiro', 'março'];
// const outono = ['abril', 'maio', 'junho'];
// const inverno = ['julho', 'agosto', 'setembro'];
// const primavera = ['outubro', 'novembro', 'dezembro'];

// if (verao.includes(mes)) {
//   estacaoDoAno = 'Verão';
// } else if (outono.includes(mes)) {
//   estacaoDoAno = 'Outono';
// } else if (inverno.includes(mes)) {
//   estacaoDoAno = 'Inverno';
// } else if (primavera.includes(mes)) {
//   estacaoDoAno = 'Primavera';
// }

// console.log(estacaoDoAno); // 'Outono'