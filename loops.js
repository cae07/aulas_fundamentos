const user = {
  firstName: 'Pedro',
  age: 65,
  lastName: 'de Lara',
};

const hobbies = [ 'andar no campo', 'ouvir música', 'conversar com amigos' ];

for (let index in user) {
  if (user.age === 65) {
    user.age = 72
  }
}

console.log(user);