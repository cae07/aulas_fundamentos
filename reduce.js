const numbers = [15, 1, 87, 156, 23, 65, 42, 28, 10, '98', 2, 6, 2877, 142];

// const sum = numbers.reduce((prev, curr, index) => {
//   console.log('prev --->>> ', prev);
//   console.log('curr --->>>', curr);
//   console.log('index --->>>', index);

//   if (typeof curr !== 'number') {
//     throw new Error('Os valores precisam ser numéricos')
//   }

//   return prev + curr
// }, 0);

// console.log(sum);

const sum = (arrayNumbers) => {
  try {
    return arrayNumbers.reduce((prev, curr) => {
      if (typeof curr !== 'number') {
        throw new Error('Os valores precisam ser numéricos')
      }
      return prev + curr
    }, 0);
    
  } catch (error) {
    return error.message;
  } finally {
    console.log('finalizou o método sum');
  }
}

console.log(sum(numbers));