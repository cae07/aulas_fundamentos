const users = [
  {
    name: 'Caê Calçolari',
    age: 42,
    hobbies: ['Jogar videogame', 'Codar', 'Andar com cachorro', 'fazer academia'],
  },
  {
    name: 'Andresa Santos',
    age: 22,
    hobbies: ['Jogar videogame', 'ir ao shopping', 'Andar com cachorro', 'fazer academia', 'ballet', 'Alpinismo'],
  },
  {
    name: 'Enrique Ramos',
    age: 62,
    hobbies: ['Conversar com amigos', 'ir ao shopping', 'Andar com cachorro'],
  },
  {
    name: 'Paula de Souza',
    age: 34,
    hobbies: ['ir ao shopping', 'Andar com cachorro'],
  },
  {
    name: 'Alessandra de Oliveira',
    age: 51,
    hobbies: ['Andar com cachorro', 'Alpinismo'],
  },
]

function getNamesByHobbie(hobbie) {
  const response = [];

  for (let user of users) {
    if (user.hobbies.includes(hobbie)) {
      response.push(user.name);
    }
  }

  return response;
}

// console.log(getNamesByHobbie('ir ao shopping'));

// function getHobbiesByAge(startAge, endAge) {
//   let response = [];

//   for (let user of users) {
//     if (user.age >= startAge || user.age <= endAge) {
//       response = [...response, ...user.hobbies]
//     }
//   }

//   return response;
// }

function getHobbiesByAge(startAge, endAge) {
  const response = [];

  for (let user of users) {
    if (user.age >= startAge || user.age <= endAge) {
      for (let hoobie of user.hobbies) {
        response.push(hoobie);
      }
    }
  }

  return response;
}

console.log(getHobbiesByAge(42, 64));
