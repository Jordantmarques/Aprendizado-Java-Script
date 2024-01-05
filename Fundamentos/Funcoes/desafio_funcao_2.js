/*function textoOuNumero(retornaTexto) {
    // return retornaTexto ? 'Sou um texto legal!' : 123;
    if(retornaTexto) {
        return 'Sou um texto legal!';
    }
    else {
        return 123;
    }
}

console.log(textoOuNumero(true));

console.log(`Resultado é: ${textoOuNumero(true)}`);

console.log(new Date(), new Date().getUTCHours);

//-----------------//----------- Desafio -----------//------------------------//-----------------
*/

console.log('\n');

function retornaConceito(nota) {
    switch(nota) {
        case 10:
            return 'A+';
        case 9:
            return 'A';
        case 8:
            return 'B+';
        case 7:
            return 'B';
        case 6:
            return 'C+';
        case 5:
            return 'C';
        case 4:
            return 'D+';
        case 3:
            return 'D';
        case 2:
            return 'E+';
        case 1:
            return 'E';
        case 0:
            return 'F';
        default:
            return null;
    }
}

console.log(`O conceito do Bruno foi: ${retornaConceito(10)}`);
console.log(`O conceito do Jordan foi: ${retornaConceito(6)}`);