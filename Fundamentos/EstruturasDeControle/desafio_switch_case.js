/*let nota1 = 1;

switch(Math.ceil(nota1)) {
    case 10: case 9: case 8: case 7:
        console.log('Parabéns!');
        break;
    case 6:
    case 5:
        console.log('Recuperação!');
        break;
    case 4: case 3:
        console.log('Reprovação!');
        break;
    case 2: case 1:
        console.log('Muito Reprovado!');
        break;
    default:
        console.log('Nota Inválida!');
}

//--------------//-------------- Desafio ------------//----------------//-----------

console.log('\n');
*/
// Declaração de variávies
let nota;
let conceito;

// Atribuição de variáveis
nota = 10;

// Regras de negócio
switch(nota) {
    case 10:
        conceito = 'A+';
        break;
    case 9:
        conceito = 'A';
        break;
    case 8:
        conceito = 'B+';
        break;
    case 7:
        conceito = 'B';
        break;
    case 6:
        conceito = 'C+';
        break;
    case 5:
        conceito = 'C';
        break;
    case 4:
        conceito = 'D+';
        break;
    case 3:
        conceito = 'D';
        break;
    case 2:
        conceito = 'E+';
        break;
    case 1:
        conceito = 'E';
        break;
    case 0:
        conceito = 'F';
        break;
    default:
        conceito = 'Nota Inválida!';
}

// Impressão de saídas

console.log(conceito);