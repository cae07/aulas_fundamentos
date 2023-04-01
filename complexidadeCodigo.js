function sacar(valor, saldo) {
  if (valor >= 1 && saldo >= 0) {
      if (valor <= saldo) {
          return `Saque realizado com sucesso. Novo saldo: ${saldo - valor}`;
      } else {
          return `Saldo insuficiente. Seu saldo atual é: ${saldo}`;
      }
  } else {
      return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.';
  }
}

function validateValues(valor, saldo) {
  return valor >= 1 && saldo >= 0;
}

function compareValues(valor, saldo) {
  return valor <= saldo;
}

// function sacar2(valor, saldo) {
//   if (!validateValues(valor, saldo)) {
//     return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.';
//   }

//   if (compareValues(valor, saldo)) {
//     return `Saque realizado com sucesso. Novo saldo: ${saldo - valor}`
//   }

//   return `Saldo insuficiente. Seu saldo atual é: ${saldo}`
// }

function sacar2(valor, saldo) {
  if (!validateValues(valor, saldo)) {
    return 'Valor ou saldo inválido. O valor deve ser maior ou igual a 1 e saldo deve ser maior ou igual a 0.';
  }
  
  const ok =`Saque realizado com sucesso. Novo saldo: ${saldo - valor}`;
  const fail = `Saldo insuficiente. Seu saldo atual é: ${saldo}`;

  return compareValues(valor, saldo) ? ok : fail;
}

console.log(sacar2(4, 6));