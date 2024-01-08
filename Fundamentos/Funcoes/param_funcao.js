/*
function somar(a = 0, b = 0, c = 0, d = 0) { //  Definindo valores
    // padrões para os parâmetros da função assumir. Se não fizer isso
    // assume undefined
    return a + b + c + d;
}

console.log(somar(1, 2, 3, 4));
console.log(somar(1, 2, 3));
console.log(somar(1, 2, 3, 4, 5, 6));
*/
//----------------//--------------------//-------------------//-----------------

console.log('\n');

function executar(funcao, n1, n2) {
    if(typeof funcao === 'function') {
        console.log(funcao(n1, n2));
    }
}

function somar(a, b) {
    return a + b;
}

function subtrair(a, b) {
    return a - b;
}

function multiplicar(a, b) {
    return a * b;
}

executar(somar, 50, 40);
executar(subtrair, 50, 40);
executar(multiplicar, 50, 40);

//------------------//----------------------//------------------------//------------------

console.log('\n');

function retornarUmaFuncao() {
    function bomDia() {
        return 'Bom dia!';
    }

    return bomDia;
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());

//---------------------//--------------------//-----------------------//-----------------

console.log('\n');

function retornarUmaFuncao() {
    return function () { // Função anônima
        return 'Bom dia!'; 
    }
}

console.log(retornarUmaFuncao);
console.log(retornarUmaFuncao());
console.log(retornarUmaFuncao()());

//---------------------//--------------------//-----------------------//-----------------

console.log('\n');

// Currying
function somar1(a, b) {
    return a + b;
}

console.log(somar1(5, 4));

function somar2(a) {
    return function(b) {
        return a + b;
    }
}

console.log(somar2(5));
console.log(somar2(5)(4));

let somarMais10 = somar2(10);

console.log(somarMais10(5));