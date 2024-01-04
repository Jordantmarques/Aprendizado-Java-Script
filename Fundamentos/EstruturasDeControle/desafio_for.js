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

//---------------//---------- Desafio For ------------//--------------//---------------

console.log('\n');

let linha1 = '';

for(let i = 1; i <= 6; i++) {
    linha1 += '#';
    console.log(linha1);
}

console.log('\n');

for(let vertical = '#'; vertical != '#######'; vertical += '#') {
    console.log(vertical);
}

// Melhorado

console.log('\n');

let saida = '';

for(let linha = '#'; linha != '#######'; linha += '#') {
    saida = saida + '\n' + linha;
}

console.log(saida);