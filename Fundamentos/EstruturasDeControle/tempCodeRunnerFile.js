// Declaração das variáveis
var nota;
var conceito;

// Atribuição das variáveis
nota = 9.8;

// Regras de negócio
if(nota >= 9 && nota <=10)
{
    let conceito = 'A';
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
else if(nota < 4.5)
{
    conceito = 'F';
}

// Impressão de resultados
console.log(conceito);