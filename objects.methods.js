const user = {
  firstName: 'Pedro',
  age: 65,
  lastName: 'de Lara',
};

const keys = Object.keys(user);

// console.log(keys);
// keys.forEach(key => console.log(user[key]));

// Object.values(user).forEach(value => console.log(value));

const tuples = Object.entries(user);

// console.log(tuples);