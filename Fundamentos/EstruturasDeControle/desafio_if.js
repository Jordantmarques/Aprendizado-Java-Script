//--------------//----------- Desafio 1 -----------//-------------//--------

const notaF = 9.3;

if(notaF >= 9); {
    console.log('Quadro de Honra!');
    console.log('Parabéns!');
}

console.log('Fim!');
/* A sentença do if é executada e terminada logo depois, já que o 
ponto e virgula no final da linha termina sua execução sem um 
procedimento para a condicional (um bloco de código para ser executado).
*/

console.log('\n');

//--------------//----------- Desafio 2 -----------//--------------//------------

// Declaração das variáveis
var nota;
var conceito;

// Atribuição das variáveis
nota = 0.0;

// Regras de negócio
if(nota >= 9 && nota <=10)
{
    conceito = 'A';
}
else if(nota >= 7.0 && nota <= 8.9)
{
    conceito = 'B';
}
else if(nota >= 5.0 && nota <= 6.9)
{
    conceito = 'C';
}
else if(nota >= 4.5 && nota <= 4.9)
{
    conceito = 'D';
}
else if(nota >= 0.0 && nota < 4.5)
{
    conceito = 'F';
}

// Impressão de resultados
console.log(conceito);