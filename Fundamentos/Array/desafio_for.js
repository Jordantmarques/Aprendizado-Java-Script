// Arrays constantes são costantes em tipo e não em valores dos elementos

console.log(typeof(console));
console.log(typeof(console.log));

const num = [1, 2, 3, 4, 5, 6];

for(let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

console.log('\n');

for(let i = 0; i < num.length; i+= 2) {
    console.log(num[i]);
}

console.log('\n');

const notas = [7, 8, 3, 5, 10, 9, 8, 8];

for(let nota of notas) { // For each
    console.log(nota);
}

let valores = '';

for(let nota of notas) {
    valores += nota + ' ';
}

console.log(valores);

let indices = '';

for(let indice in notas) {
    indices += indice + ' ';
}

console.log(indices);

//------------------//--------- Desafio ---------------//---------------//--------------

console.log('\n');

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i = numeros.length - 2; i >= 0; i -= 2) {
    console.log(numeros[i]);
}