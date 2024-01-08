// Técnica para nomear funções
let x = 123;
let y = 321;

const somar = function(a, b) {
    return a + b;
}

console.log(somar(x, y));

// IIFE -> 

//-------------------//------------------//---------------------//-------------------//

console.log('\n');

function executar(parametro) {
    if(console.log(typeof executar) === 'function') {
        console.log(parametro()); // Invoca um parâmetro com uma função
    }
}

function bomDia() {
    return 'Bom dia';
}

executar(3);
executar(bomDia()); /* Não imprimi nada, já que com esse comando eu só
invoco a função. Está sendo passado como parâmetro pra executar o
 o resultado de bomDia() == 'Bom dia'.*/
executar(bomDia); // Passar uma função de parâmetro para uma outra
// função

const z = bomDia; /* Faz a função bomDia apontar para x, logo x também
 é uma função.*/
const w = bomDia(); // w tem o retorno da função bomDia().

console.log(z());
console.log(w);