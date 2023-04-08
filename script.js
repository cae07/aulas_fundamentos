const validateIsNumber = (value) => {
  if (typeof value !== 'number') {
    throw new Error ('os valores precisam ser numéricos');
  }
}

const sum = (valueA, valueB) => {
  try {
    validateIsNumber(valueA);
    validateIsNumber(valueB);
    return valueA + valueB;
    
  } catch (error) {
    console.log('caiu no catch');
    console.log(error.message);
  }
};

console.log(sum(15, 345));