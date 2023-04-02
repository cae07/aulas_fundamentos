const user = {
  firstName: 'Pedro',
  age: 61,
};

const userFirstName = user['firstName'];

user.lastName = 'de Lara';
user['adress'] = {
  street: 'das batatinhas',
  number: 52,
}
user.hobbies = ['andar no campo', 'ouvir música'];
// user.fullName = user.firstName + ' ' + user.lastName;
user.fullName = `${user.firstName} ${user.lastName}`;

user['age'] = 64;
user.age = 65;

user.hobbies.push('conversar com amigos');
user.hobbies = ['batata']

user.adress.number = 157;
user.adress.city = 'Jaraguá do Sul';

console.log(user);
