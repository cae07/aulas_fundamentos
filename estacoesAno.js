const mes = 'batatinha';
let estacaoDoAno;

switch (mes) {
    case 'janeiro':
    case 'fevereiro':
    case 'março':
        estacaoDoAno = 'Verão';
        break;
    case 'abril':
    case 'maio':
    case 'junho':
        estacaoDoAno = 'Outono';
        break;
    case 'julho':
    case 'agosto':
    case 'setembro':
        estacaoDoAno = 'Inverno';
        break;
    case 'outubro':
    case 'novembro':
    case 'dezembro':
        estacaoDoAno = 'Primavera';
        break;
    default:
        estacaoDoAno = 'Desulpe, mas não existe este mês. Verifique a informação e tente novamente';
}

console.log(estacaoDoAno); // 'Outono'