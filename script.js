const getClasses = document.getElementsByClassName('outra-posicao');

for (let element of getClasses) {
  if (element.innerText === 'Third Place') {
    element.innerText = 'Terceiro Lugar'
  }
}