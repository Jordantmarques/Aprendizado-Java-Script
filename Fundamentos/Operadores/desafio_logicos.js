// e -> &&
// ou -> ||

// Declaração de variáveis
let temDinheiro;
let temSol;
let carroDisponivel = false;

let resultadoE;

let resultadoOU;

// Atribuição de variáveis
temDinheiro = true
temSol = true
carroDisponivel = false

resultadoE = "#1 (AND) Vai pro shopping? "
resultadoOU = "#2 (OU) Vai pro shopping? "

// Regras de negócio
resultadoE += temDinheiro && temSol;

resultadoOU += temSol || carroDisponivel;

// Impressão de resultados
console.log(resultadoE);

console.log(resultadoOU);

//------------//--------------//-------------------//------------------

// Declaração de variáveis
const t1 = true;
const t2 = true;

let comprar32;
let comprar50;
let tomarSorvete;
let ficarEmCasa;

// Atribuição de variáveis
comprar32 = t1 !== t2;
comprar50 = t1 && t2;
tomarSorvete = t1 || t2;
ficarEmCasa = !tomarSorvete

// Impressão de resultados
console.log('Vamos comprar a TV de 50"?', comprar50); // AND
console.log('Vamos comprar a TV de 32"?', comprar32); // XOR
console.log('Vamos comprar sorvete?', tomarSorvete); // OR
console.log('Vamos ficar em casa?', ficarEmCasa); // NOT

//------------//-------------//-------------------//-----------//----------

// Declaração de variáveis
let verdadeira1 = 1 + 4 > '3' && 3 + 2 != 4;
let verdadeira2 = 1 + 2 <= 10 || 3 > 1 + 2;

let falso1 =  1 + 2 !== 2 + 1;
let falso2 = !(2 / 2 == 1);

// Atribuição de variáveis
console.log(verdadeira1);
console.log(verdadeira2);

console.log(falso1);
console.log(falso2);