// Criando objeto de forma literal -> Repetitvo e pouco manutenível
const produto = { // Objeto -> Conjunto de pares chave valor
    nome: 'Caneta', // Atributos
    preco: 9.99,
    desconto: 0.2,

    distribuicao: ['saoPaulo', 'beloHorizonte', 'vicosa'],

    precoComDesconto: function() { // Método
        return this.preco * (1 - this.desconto);
    },

    dimesoes: {
        largura: 5.0,
        altura: 3.0,
        espessura: 1.0,
    },
};

console.log(produto['nome']);
console.log(produto.nome);

console.log(typeof produto);

console.log(produto.precoComDesconto());

produto.nome = 'Lápis';
produto.preco = 10.0;

console.log(produto.nome);

produto.tipo = 'Material escolar'; // Cria atributo

console.log(produto.tipo);
console.log(produto.distribuicao[2]);
console.log(produto.dimesoes.altura);

//-------------//--------------//--------- Desafio ----------//---------------//-------------

console.log('\n');

const data = {
    dia: 1,
    mes: 1,
    ano: 2011,

    dateFormatedShown: function() { // Método(Função)
        console.log(`${this.dia}/${this.mes}/${this.ano}`)
    }
};

data.dataFormatedShown();