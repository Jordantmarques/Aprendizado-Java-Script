const numeros = [1, 2, 3, 4, 5];

numeros[0] = 100;

numeros.push(6);

console.log(numeros.indexOf(4));
console.log(numeros.indexOf(4, 4));
console.log(numeros.includes(10));
console.log(numeros.includes(6));
console.log(numeros.join(' - '));
console.log(numeros);

const numeros2 = numeros.concat(7, 8, 9);
console.log(numeros2);

//------------------//--------------------//---------------------//---------------

console.log('\n');

const nums = [1, 2, 3, 4, 5, 8];

nums.splice(1, 2);

console.log(nums);

console.log(nums.pop());
console.log(nums.pop());

console.log(nums);

//--------------//------------------//---------------//------------------//------------

console.log('\n');

const valores = [1, 2, 3];

for(let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
}

function praCadaElemento(elemento, indice, array) {
    console.log(elemento, indice, array);
}

valores.forEach(praCadaElemento); // Precisa receber uma função como
// parâmetro

console.log('\n');

valores.forEach(function(elemento, indice, array) {
    console.log(elemento, indice, array);
});

console.log('\n');

valores.forEach(function(el) {
    console.log(el);
});

console.log('\n');

valores.forEach(function(_, i) {
    console.log(i);
});