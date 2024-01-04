/*
O bloco de código que segue o if/else é entendido como uma unidade e
portanto é possível fazer o mesmo código a seguir usando if/else em
sua forma padrão.
*/

const hora = 23;

let saudacao;

if(hora < 12) {
    saudacao = 'Bom dia!';
}
else {
    if(hora < 18) {
        saudacao = 'Boa tarde!';
    }
    else {
        if(hora < 22) {
            saudacao = `Boa noite!`;
        }
        else {
            saudacao = 'Muito tarde!';
        }
    }
}

console.log(saudacao);

//-----------------//-----------------------//---------------------//---------------

console.log('\n');

// Declaração de variáveis
let a;
let b;
let operacao = '%';
let resultado;

// Atribuição de variáveis
a = 10;
b = 28;

// Regras de negócio
if(operacao === '+') {
    resultado = a + b;
}
else if(operacao === '-') {
    resultado = a - b;
}
else if(operacao === '*') {
    resultado = a * b;
}
else if(operacao === '/') {
    resultado = a / b;
}
else if(operacao === '%') {
    resultado = a % b;
}

// Impressão de variáveis
console.log(resultado);