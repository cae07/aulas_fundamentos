const users = [
  { name: 'Pedro', age: 19 },
  { name: 'Caê', age: 42 },
  { name: 'Alessandra', age: 32 },
  { name: 'Bruna', age: 9 },
  { name: 'José', age: 49 },
  { name: 'Paula', age: 14 },
  { name: 'Raimundo', age: 64 },
];

const findByAverageAge = (ageToStart, ageToEnd) => {
  const response = users.filter(user => {
    return user.age >= ageToStart && user.age <= ageToEnd
  });

  return response;
}

// const findByAverageAge = (ageToStart, ageToEnd) => {
//   return users.filter(user =>
//     user.age >= ageToStart && user.age <= ageToEnd
// }


// const findByAverageAge = (ageToStart, ageToEnd) => users.filter(user =>
//   user.age >= ageToStart && user.age <= ageToEnd);

console.log(findByAverageAge(10, 32));