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