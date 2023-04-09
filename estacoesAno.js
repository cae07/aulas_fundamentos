const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const estacoesDoAno = [
  ...spring,
  ...summer,
  ...fall,
  ...winter
];

console.log(estacoesDoAno);