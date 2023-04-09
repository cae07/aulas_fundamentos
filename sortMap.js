const toDos = ['lavar louça', 'limpar casa', 'andar dog', 'ouvir musica', 'jogar', 'alimentar gato', 'limpar garagem'];

// console.log(toDos);
// toDos.sort();

// console.log(toDos);

const numbers = [15, 1, 87, 156, 23, 65, 42, 28, 10, 98, 2, 6, 2877, 142];

numbers.sort((a, b) => a - b);

// console.log(numbers);

const mappedNumbers = numbers.map(number => number + 10);

// console.log(numbers);
// console.log(mappedNumbers);

const mappedToDos = toDos.map(toDo => {
  if (toDo.includes('limpar')) {
    return toDo.replace('limpar', 'Limpar');
  }
  return toDo;
});
const mappedToDos2 = toDos.map(toDo => {
  if (toDo.includes('garagem')) {
    return toDo.replace('garagem', 'porão');
  }
  return toDo;
});

console.log(mappedToDos2);