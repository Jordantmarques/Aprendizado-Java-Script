// Repetições determinadas -> for
// Repetições indeterminadas -> while

let quantidade = 0;

while(Math.random() < 0.8) {
    quantidade++;
}

console.log('Quantidade: ' + quantidade);

//-------------//------------------//------------------------//------------------

console.log('\n');

const futuro = Date.now() + 1000;
let quantidade1 = 0;

while(Date.now() < futuro) {
    quantidade1++;
}

console.log('Quantidade: ' + quantidade1);

//------------------//--------------------//------------------//---------------

console.log('\n');

// Declaração de variáveis

let valor;

// Atribuição de variáveis

valor = 7;

// Regras de negócio

for(let i = valor; i >= 3; i--) {
    saida = i;
    console.log(saida);
}

//------------------//-----------------------//---------------------//---------

console.log('\n');

/* Template String -> Colocar os valores das variáveis nas Strings
let i = 3;
'i = ${i} + ...'
*/

const i = 2;
const j = 4;

console.log('i = ' + i + ', j = ' + j);
console.log(`i = ${i}, j = ${j}`); // É usado crase

//------------------- Exemplo Template String ------------//---------------------

for(let i = 1; i <= 3; i++) {
    let horizontal = '';
    
    for(let j = 1; j <= 3; j++) {
        horizontal += `[${i}, ${j}]`;
    }

    console.log(horizontal);
}

