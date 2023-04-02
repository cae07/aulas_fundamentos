const ingredientsList = [
  '2 xícaras (chá) de açúcar',
  '3 xícaras (chá) de farinha de trigo',
  '4 colheres (sopa) de margarina',
  '3 ovos',
  '1 e 1/2 xícara (chá) de leite',
  '1 colher (sopa) bem cheia de fermento em pó'
];

const listToAdd = document.querySelector('.unordered_list');

for (let index = 0; index < ingredientsList.length; index += 1) {
  const ingredient = ingredientsList[index];

  const newList = document.createElement('li');
  newList.innerText = ingredient;

  newList.className = 'ingredient-item';
  
  listToAdd.appendChild(newList);
}

const list = document.querySelectorAll('.ingredient-item');

list.forEach(element => {
  const ingredient = element.innerText;

  if (ingredient.includes('açúcar')) {
    listToAdd.removeChild(element);
  }
})