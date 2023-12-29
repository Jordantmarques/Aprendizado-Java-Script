// Declaração de variáveis
let a;
let b;
let aux;

// Atribuição de valores
a = 7;
b = 94;
aux = a;

// Regras de negócio sem aux(usando ferramenta específica da linguagem js) 
//[a, b] = [b, a];

// Regras de negócio com aux
a = b;
b = aux;

// Impressão de resultados
console.log("Valor final de a: " + a);
console.log("Valor final de b: " + b);