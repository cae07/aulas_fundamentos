const user = {
  name: 'Caê Calçolari',
  age: 42,
  adress: {
    street: '1508',
    number: 155,
    city: 'Jaragua do Sul',
    state: 'Santa Catarina',
    country: 'Brazil',
  },
  phone: {
    hoobies: ['Jogar videogame', 'Codar', 'Andar com cachorro', 'fazer academia'],
    mobile: '(47) 9999-9999',
    home: '(47) 8888-8888',
  }
}

const userName = user.name;
const userCity = user.adress.city;

console.log(userName);
console.log(userCity);

