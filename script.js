// qual a senioridade do funcionário de acordo com salário
// até 1800 - estagiário
// até 3500 - junior
// até 6000 - pleno
// até de 9000 - senior
// acima de 9001 - diretor

const salario = 3500;
let senioridade = '?';

if (salario <= 1800) {
  senioridade = 'estagiário';
} else if (salario <= 3500) {
  senioridade = 'junior';
} else if (salario <= 6000) {
  senioridade = 'pleno';
} else if (salario <= 9000) {
  senioridade = 'senior';
} else {
  senioridade = 'diretor';
}

console.log(`O colaborador tem nível = ${senioridade}`);