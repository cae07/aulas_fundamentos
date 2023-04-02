const user = {
  firstName: 'Pedro',
  age: 65,
  lastName: 'de Lara',
};

const obj1 = { hobbies: ['caminhar'] };
const obj2 = { adress: { street: 'das batatas', number: 52 } };

Object.assign(user, obj1, obj2);

const userClone = user;

user.age = 15;

console.log('userClone => ', userClone);
console.log('user => ', user);