const user = {
  name: 'Luiz',
  age: 37,
  country: 'Brazil'
};

// const userClone = {
//   ...user,
//   country: 'Brazil'
// }

// console.log(userClone);

const userUpdated = {
  ...user,
  age: 42
}

console.log(user);
console.log(userUpdated);