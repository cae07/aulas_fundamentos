const setButton = document.querySelector('#button-add');
const getButton = document.querySelector('#button-get');
const input = document.querySelector('input');
const paragraph = document.querySelector('p');

const handleSetButton = () => {
  const inputValue = { name: 'Caê Calçolari', age: 42 };
  localStorage.setItem("user", JSON.stringify(inputValue));
  input.value = '';
};

const handleGetButton = () => {
  const localStorageValue = JSON.parse(localStorage.getItem('user'));
  paragraph.innerText = localStorageValue.name;
};

setButton.addEventListener('click', handleSetButton);
getButton.addEventListener('click', handleGetButton);