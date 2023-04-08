const setButton = document.querySelector('#button-add');
const getButton = document.querySelector('#button-get');
const removeButton = document.querySelector('#remove-button');
const removeAllButton = document.querySelector('#remove-all-button');
const input = document.querySelector('#input-id');
const inputRemove = document.querySelector('#remove-key');
const paragraph = document.querySelector('p');

const handleSetButton = () => {
  const inputValue = input.value;
  localStorage.setItem("user", JSON.stringify(inputValue));
  localStorage.setItem("telefone", '11 4752163543');
  localStorage.setItem("idade", JSON.stringify('42'));
  input.value = '';
};

const handleGetButton = () => {
  const localStorageValue = localStorage.getItem('user');
  console.log(localStorageValue);
};

const handleRemoveButton = () => {
  const key = inputRemove.value;

  localStorage.removeItem(key);
  inputRemove.value = '';
};

const handleDeleteAll = () => {
  localStorage.clear();
}

setButton.addEventListener('click', handleSetButton);
getButton.addEventListener('click', handleGetButton);
removeButton.addEventListener('click', handleRemoveButton);
removeAllButton.addEventListener('click', handleDeleteAll)