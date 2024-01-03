let hora = 12;
// Exemplo de operador ternário ou atribuição condicional
let saudacao = hora <= 11 ? 'Bom dia' : 'Boa tarde';
// (variável) = (expressão) ? Resultado TRUE : Restultado FALSE
console.log(saudacao);

//-------------------//-----------------//--------------------//---------------------//

console.log('\n');

let hora1 = 21;
// Exemplo de operador ternário ou atribuição condicional
let saudacao1 = hora1 <= 11 ? 'Bom dia' : hora1 <= 17 ? 'Boa tarde' : 'Boa noite';
// (variável) = (expressão) ? Resultado TRUE : Restultado FALSE
console.log(saudacao1);

//-------------------//--------------------//----------------------//--------------------//

console.log('\n');

// Declaração de variáveis
const a = 8;
const b = 4;

// Atribuição de variáveis
const operacao = '+'; // + - * /

var resultado

// Regras de negócio
resultado = operacao === '+' ? (a + b) :
operacao === '-' ? (a - b) :
operacao === '*' ? (a * b) : (a / b);

// Impressão de resultados
console.log(resultado);