const car = {
  modelo: 'Gol',
  fabricante: 'Volkswagem',
  cor: 'verde',
  ano: 2016,
  km: 120000,
  motor: 1.6,
};

const carModel = car['modelo'] // bracket notation
const carModel2 = car.modelo // dot notation

console.log(carModel2);