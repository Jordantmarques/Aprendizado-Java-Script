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