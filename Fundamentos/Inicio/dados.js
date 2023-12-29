// Declaração de variáveis (Tipo seguido de identificador)
/* Definir bons identificadores é essencial 
para o desenvolvimento de um bom código
*/
// var -> defini variável globla
var notaTotal, primeiraNota, segundaNota, terceiraNota;
// let -> defini variável local
let ferramenta, notaFinal1, binárioAprovação;
// const -> declaração de variável constante
const constante = 3;

// Atribuição de valores às variáveis
notaTotal = 10;
primeiraNota = 6.4;
segundaNota = 1.5;
terceiraNota = 7.9;
ferramenta = "Caneta";
binárioAprovação = true;
constante = 3;

// Calculos com variáveis
notaFinal1 = segundaNota + primeiraNota;
notaFinal2 = terceiraNota + segundaNota;

// Impressão das variáveis
console.log(notaTotal);
console.log(primeiraNota);
console.log(notaFinal1);
console.log(notaFinal2);
console.log(ferramenta);
console.log(constante);

// Impressão concatenada
console.log("Nota Final 1: " + notaFinal1);
console.log("Nota Final 2: " + notaFinal2);

// Tipo de variável
console.log(typeof notaTotal);
console.log(ferramenta);
console.log(binárioAprovação);