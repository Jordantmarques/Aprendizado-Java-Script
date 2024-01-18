function cumprimentar(text) {
    console.log(`Olá, ${text}!`);
}

cumprimentar("Leonardo");
cumprimentar("Maria");

//----------------------//------------------------------//----------------------------

console.log('\n');

function converterIdadeEmAnosParaDias(idadeEmAnos) {
    let idadeEmDias = idadeEmAnos * 365;
    
    console.log(idadeEmDias);
}

converterIdadeEmAnosParaDias(25);
converterIdadeEmAnosParaDias(70);

//----------------------//------------------------------//----------------------------

console.log('\n');

function calcularSalario(horasTrabalhadasNoMes, remuneracaoPorHora) {
    let salario = horasTrabalhadasNoMes * remuneracaoPorHora;
    let saida = `Salário igual a R$ ${salario}`;
    
    console.log(saida);
}

calcularSalario(150, 40.5);

//----------------------//------------------------------//----------------------------

console.log('\n');

function nomeDoMes(numeroDoMes) {
    let mesExtenso;
    
    switch (numeroDoMes) {
        case 1: mesExtenso = 'janeiro';
        break;
        case 2: mesExtenso = 'fevereiro';
        break;
        case 3: mesExtenso = 'março';
        break;
        case 4: mesExtenso = 'abril';
        break;
        case 5: mesExtenso = 'maio';
        break;
        case 6: mesExtenso = 'junho';
        break;
        case 7: mesExtenso = 'julho';
        break;
        case 8: mesExtenso = 'agosto';
        break;
        case 9: mesExtenso = 'setembro';
        break;
        case 10: mesExtenso = 'outubro';
        break;
        case 11: mesExtenso = 'novembro';
        break;
        case 12: mesExtenso = 'dezembro';
        break;
    }

    console.log(mesExtenso);
}

nomeDoMes(1);
nomeDoMes(4);

//--------Opção-------//--------------//

function receberNomeDoMes(numero) {
    const mapeamento = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho',
    'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    console.log(--numero);
    return mapeamento[--numero];
    
    }

console.log(receberNomeDoMes(8));

//----------------------//------------------------------//----------------------------

console.log('\n');

function mesmoTipo(num1, num2) {
    let saidaTipo;

    if(typeof(num1) === typeof(num2)) {
        saidaTipo = true;
    }
    else {
        saidaTipo = false;
    }

    return saidaTipo;
}

function maiorOuIgual(num1, num2) {
    if(num1 >= num2 && mesmoTipo(num1, num2)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}

maiorOuIgual(0, 0);
maiorOuIgual(0, "0");
maiorOuIgual(5, 1);

//----------------------//------------------------------//----------------------------

console.log('\n');

function inverso(entrada) {
    let saida;
    
    if(typeof(entrada) == 'boolean') {
        if(entrada == true) {
            saida = false;
        }
        else {
            saida = true;
        }
    }
    else if(typeof(entrada) == 'number') {
        saida = entrada * -1;
    }
    else {
        saida = `booleano ou número esperados, mas o parâmetro é do tipo ${typeof(entrada)}`;
    }
    
    console.log(saida);
}

inverso(true);
inverso("6");
inverso(-2000);

//----------------------//------------------------------//----------------------------

console.log('\n');

function estaEntre(numero, maximo, minimo, inclusivo = false) {
    let saida;
    
    if(inclusivo == true) {
        if(numero >= minimo && numero <= maximo) {
            saida = true;
        }
        else {
            saida = false;
        }
    }
    else {
        if(numero > minimo && numero < maximo) {
            saida = true;
        }
        else {
            saida = false;
        }
    }
    
    console.log(saida);
}

estaEntre(90, 100, 50);
estaEntre(16, 100, 160);
estaEntre(3, 150, 3);
estaEntre(3, 150, 3, true);

//----------------------//------------------------------//----------------------------

console.log('\n');

function multiplicar(num1, num2) {
    let saida = 0;
    
    for(num2; num2 > 0; num2--) {
        saida += num1;
    }
    
    console.log(saida);
}

multiplicar(5, 5);
multiplicar(0, 7);

//--------------Opção-------------//

function multiplicar(numeroA, numeroB) {
    if (numeroA === 0 || numeroB === 0) return 0
    const maiorNumero = Math.max(numeroA, numeroB)
    const menorNumero = Math.min(numeroA, numeroB)
    function multiplicarRecursivamente(numero, multiplicador) {
    return (
    multiplicador === 1 ?
    numero :
    numero + multiplicarRecursivamente(numero, multiplicador-1)
    )
    }
    // nessa versão, garantimos que o multiplicador será será o menor número, portanto haverá o mínimo de chamadas recursivas
    return multiplicarRecursivamente(maiorNumero, menorNumero )
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function repetir(repeticao, vezes) {
    let saida = [];
    
    for(let i = 0; i < vezes; i++) {
        
        saida[i] = repeticao;
    }
    
    console.log(saida);
}

repetir("código", 2);
repetir(7, 3);

//-----------Opção------------//

function repetir(item, quantidade) {
    let resultado = []
    for (let i = 0; i < quantidade; i++)
    resultado.push(item)
    return resultado
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function simboloMais(num) {
    let saida = "";
    
    for(let i = 0; i < num; i++) {
        saida += "+";
    }
    
    console.log(saida);
}

simboloMais(2);
simboloMais(4);

//------------Opção-------------//

function simboloMais(quantidade) {
    return Array(quantidade).fill('+').join('')
}

//------------Opção-------------//

function simboloMais(quantidade) {
    return "+".repeat(quantidade)
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function receberPrimeiroEUltimoElemento(vetor) {
    let saida = [];

    saida[0] = vetor.shift();
    saida[1] = vetor.pop();

    console.log(saida);
}

receberPrimeiroEUltimoElemento([7, 14, "Olá"]);
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]);

//------------Opção----------//

function receberPrimeiroEUltimoElemento(vetor) {
    let saida = [];
        
    for(let i = 0; i < vetor.length; i++) {
        if(i == 0) {
            saida[0] = vetor[i];
        }
        else if(i == vetor.length - 1) {
            saida[1] = vetor[i];
        }
    }

    console.log(saida);
}

receberPrimeiroEUltimoElemento([7, 14, "Olá"]);
receberPrimeiroEUltimoElemento([-100, "aplicativo", 16]);

//----------------------//------------------------------//----------------------------

console.log('\n');

function removerPropriedade(objeto, atributo) {
    let copia = Object.assign({}, objeto); // Outra opção -> let copia = {...objeto};
    
    delete copia[atributo];
    
    console.log(copia);
}

removerPropriedade({a: 1, b: 2}, "a");
removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
}, "descricao");

//----------------------//------------------------------//----------------------------

console.log('\n');

function filtrarNumeros(vetor) {
    let saida = [];
    
    for(let item of vetor) {
        if(typeof item === 'number') {
            saida.push(item);
        }
    }
    
    console.log(saida);
}

filtrarNumeros(["Javascript", 1, "3", "Web", 20]);
filtrarNumeros(["a", "c"]);

//------------------Opção-----------------//

function filtrarNumeros(array) {
    return array.filter(item => typeof item === "number")
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function objetoParaArray(objeto) {
    const saida = [];
    
    for(let chave in objeto) {
        saida.push([chave, objeto[chave]]);
    }
    
    console.log(saida);
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
});
objetoParaArray({
    codigo: 11111,
    preco: 12000
});

//-----------------Opção-------------------//

function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto);
    const saida = chaves.map(chave => [chave, objeto[chave]]);
    
    console.log(saida);
}

objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
});
objetoParaArray({
    codigo: 11111,
    preco: 12000
});

//-------------------Opção----------------------//

function objetoParaArray(objeto) {
    return Object.entries(objeto)
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function receberSomenteOsParesDeIndicesPares(vetor) {
    const saida = [];
    
    for(let i = 0; i < vetor.length; i++) {
        if(vetor[i] % 2 == 0 && i % 2 == 0) {
            saida.push(vetor[i]);
        }
    }
    
    console.log(saida);
}

receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]);
receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]);

//------------------Opção-----------------------//

function receberSomenteOsParesDeIndicesPares(numeros) {
    return numeros.filter((numero, indice) => {
    const numeroPar = numero % 2 === 0
    const indicePar = indice % 2 === 0
    return numeroPar && indicePar
    })
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4]));
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43]));

//----------------------//------------------------------//----------------------------

console.log('\n');

function checarAnoBissexto(ano) {
    let saida = false;
    
    if((ano % 4 == 0 && !(ano % 100 == 0)) || ano % 400 == 0) {
        saida = true;
    }
    
    console.log(saida);
}

checarAnoBissexto(2020);
checarAnoBissexto(2100);

//------------------Opção--------------------//

// checa-se indiretamente, verificando se o mês de fevereiro do dado ano tem 29 dias
function checarAnoBissexto(ano) {
    return new Date(ano, 1, 29).getDate() === 29;
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function somarNumeros(vetor) {
    let soma = 0;
    
    for(let item in vetor) { // item == índice
        soma += vetor[item];
    }
    // for(let i = 0; i < vetor.length; i++) {
        //     soma += vetor[i];
        // }
        
        console.log(soma);
    }
    
somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);
    
    //----------------------Opção------------------------//
    
    function somarNumeros(numeros) {
        let soma = 0
        numeros.forEach(numero => soma += numero)
        console.log(soma);
    }
    
somarNumeros([10, 10, 10]);
somarNumeros([15, 15, 15, 15]);

//----------------------//------------------------------//----------------------------
    
console.log('\n');

function despesasTotais(vetor) {
    let soma = 0;
    
    for(let item of vetor) {
        for(let i = 0; i < Object.keys(item).length; i++) {
            if(Object.keys(item)[i] == 'preco') {
                soma += Object.values(item)[i];
            }
        }
    }
    
    console.log(soma);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]);
despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]);

//----------------------Opção----------------------//

function despesasTotais(vetor) {
    let soma = 0;
    
    for(let item of vetor) {
        let index = Object.keys(item).indexOf('preco');
        
        soma += Object.values(item)[index];
    }
    
    console.log(soma);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]);
despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]);

//--------------------Opção----------------------//

function despesasTotais(itens) {
    var total = 0

    for (let item of itens) {
        total += item.preco
    }
    
    console.log(total);
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]);
despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]);

//-------------------Opção-------------------//

function despesasTotais(itens) {
    console.log(itens.map(item => item.preco).reduce((soma, item) => soma + item)); //opção -> console.log(itens.reduce((soma, item) => soma + item.preco, 0));
}

despesasTotais([
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]);
despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
]);

//----------------------//------------------------------//----------------------------
    
console.log('\n');

function calcularMedia(vetor) {
    let media = 0;

    media = (vetor.reduce((soma, item) => soma + item)) / vetor.length;

    console.log(media);
}

calcularMedia([0, 10]);
calcularMedia([1, 2, 3, 4, 5]);

//----------------------//------------------------------//----------------------------
    
console.log('\n');

function areaDoTriangulo(base, altura) {
    let area = (base * altura) / 2;
    
    console.log(area.toFixed(2));
}

areaDoTriangulo(10, 15);
areaDoTriangulo(7, 9);
areaDoTriangulo(9.25, 13.1);

//----------------------//------------------------------//----------------------------
    
console.log('\n');

function menorNumero(vetor) {
    let menorValor = vetor[0];
    
    for(let item in vetor) {
        if(vetor[item] < menorValor) {
            menorValor = vetor[item];
        }
    }
    
    console.log(menorValor);
}

menorNumero([10, 5, 35, 65]);
menorNumero([5, -15, 50, 3]);

//-------------------Opção-------------------//

function menorNumero(numeros) {
    console.log(Math.min(...numeros));
}

menorNumero([10, 5, 35, 65]);
menorNumero([5, -15, 50, 3]);

//-------------------Opção-------------------//

function menorNumero(vetor) {
    console.log(vetor.reduce((item, menor) => item < menor ? item : menor));
}

menorNumero([10, 5, 35, 65]);
menorNumero([5, -15, 50, 3]);

//----------------------//------------------------------//----------------------------
    
console.log('\n');

function funcaoDaSorte(chute) {
    let valorSorteado;
    
    valorSorteado = (Math.random() * 10).toFixed(0);
    
    if(chute == valorSorteado) {
        console.log(`Parabéns! O número sorteado foi o ${valorSorteado}`);
    }
    else {
        console.log(`Que pena! O número sorteado foi o ${valorSorteado}`);
    }
}

funcaoDaSorte(10);
funcaoDaSorte(5);
funcaoDaSorte(5);

//-------------------Opção-------------------//

/*mais informações sobre gerar números aleatórios dentro de uma certa faixa
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
function funcaoDaSorte(numeroEscolhido) {
    const min = 1;
    const max = 10;
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1) + min);
    console.log((numeroEscolhido === numeroAleatorio ? `Parabéns! O número sorteado foi o ${numeroAleatorio}` : `Que pena, o número sorteado foi o ${numeroAleatorio}`));
}

//----------------------//------------------------------//----------------------------

console.log('\n');

function contarPalavras(frase) {
    const vetor = frase;
    
    let contador = 1;
    
    for(let item in vetor) {
        if(vetor[item] == ' ') {
            contador ++;
        }
    }
    
    console.log(contador);
}

contarPalavras("Sou uma frase");
contarPalavras("Me divirto aprendendo a programar");

//-------------------Opção-------------------//

function contarPalavras(frase){
    const palavras = frase.split(" ");
    console.log(palavras.length);
}

//----------------------//------------------------------//----------------------------

console.log('\n');


function contarCaractere(letra, frase) {
    const vetor = frase;
    
    let contador = 0;
    
    for(let item in vetor) {
        if(vetor[item] == letra) {
            contador ++;
        }
    }
    
    console.log(contador);
}

contarCaractere("r", "A sorte favorece os audazes");
contarCaractere("c", "Conhece-te a ti mesmo");

//-------------------Opção-------------------//

function contarCaractere(caractereBuscado, frase) {
    let contador = 0
    for (let i = 0; i < frase.length; i++)
    if (frase.charAt(i) === caractereBuscado)
    contador++
console.log(contador);
}

contarCaractere("r", "A sorte favorece os audazes");
contarCaractere("c", "Conhece-te a ti mesmo");

//-------------------Opção-------------------//

function contarCaractere(caractereBuscado, frase) {
    console.log([...frase].filter(caractere => caractere === caractereBuscado).length);
}

contarCaractere("r", "A sorte favorece os audazes");
contarCaractere("c", "Conhece-te a ti mesmo");

//----------------------//------------------------------//----------------------------

console.log('\n');

function buscarPalavrasSemelhantes(palavra, vetor) {
    let saida = [];
    
    for(let item of vetor) {
        if(item.includes(palavra)) {
            saida.push(item);
        }
    }
    
    console.log(saida);
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]);
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]);

//-------------------Opção-------------------//

function buscarPalavrasSemelhantes(inicio, palavras) {
    console.log(palavras.filter(palavra => palavra.includes(inicio)));
}

buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"]);
buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"]);

//----------------------//------------------------------//----------------------------

console.log('\n');

function removerVogais(palavra) {
    const vetor = palavra;
    
    let saida = [];
    
    for(let item in vetor) {
        if(vetor[item] != 'a' && vetor[item] != 'e' && vetor[item] != 'i'
        && vetor[item] != 'o' && vetor[item] != 'u' && vetor[item] != 'A' 
        && vetor[item] != 'E' && vetor[item] != 'I'
        && vetor[item] != 'O' && vetor[item] != 'U') {
            saida += vetor[item];
        }
    }
    
    console.log(saida);
}

removerVogais("Cod3r");
removerVogais("Fundamentos");

//-------------------Opção-------------------//

function removerVogais(frase) {
    const vogais = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"]
    vogais.forEach( vogal => frase = frase.replace(vogal, '') )
    console.log(frase)
}

removerVogais("Cod3r");
removerVogais("Fundamentos");

//-------------------Opção-------------------//

function removerVogais(frase) {
    console.log(frase.replace(/[aeiou]/ig, ''));
}

removerVogais("Cod3r");
removerVogais("Fundamentos");

//----------------------//------------------------------//----------------------------

// console.log('\n');

// function inverter(objeto) {
//     let objetoCopia;
    
//     console.log(objetoCopia);

//     for(chave in objeto) {
//         objetoCopia.chave[chave] = chave;

//         // console.log(`${chave} : ${objetoCopia[chave]}`);

//         // let aux = chave;
//         // chave = objetoCopia[chave];
//         // objetoCopia[chave] = aux;

//         // console.log(`${chave} : ${objetoCopia[chave]}`);
//     }
    
//     console.log(objetoCopia);
// }

// inverter({ a: 1, b: 2, c: 3});

//-------------------Opção-------------------//

function inverter(objeto) {
    const objetoInvertido = {}
    Object.entries(objeto).forEach( parChaveValor => {
        const chave = 0,
        valor = 1
        objetoInvertido[ parChaveValor[valor] ] = parChaveValor[chave]
    })
    console.log(objetoInvertido);
}

inverter({ a: 1, b: 2, c: 3});

//-------------------Opção-------------------//

function inverter(objeto) {
    const paresDeChaveValorInvertidos = Object.entries(objeto)
    .map( parChaveValor => parChaveValor.reverse() )
    console.log(Object.fromEntries(paresDeChaveValorInvertidos))
}

inverter({ a: 1, b: 2, c: 3});

//----------------------//------------------------------//----------------------------

console.log('\n');

function filtrarPorQuantidadeDeDigitos(vetor, numeroDigitos) {
    let saida = [];
    
    for(let item of vetor) {
        if((item / (Math.pow(10,numeroDigitos))) <= 1 && (item / (Math.pow(10,numeroDigitos))) >= 0.1 ) {
            saida.push(item);
        }
    }
    
    console.log(saida);
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2);
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1);

//-------------------Opção-------------------//

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    let resultado = []
    for(numero of numeros){
        const quantidadeDeDigitos = String(numero).length
        if(quantidadeDeDigitos === quantidadeDesejada)
        resultado.push(numero)
}
console.log(resultado);
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2);
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1);

//-------------------Opção-------------------//

function filtrarPorQuantidadeDeDigitos(numeros, quantidadeDesejada) {
    return numeros.filter(numero => {
        const quantidadeDeDigitos = String(numero).length
        console.log(quantidadeDeDigitos === quantidadeDesejada)
    })
}

filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2);
filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1);

//----------------------//------------------------------//----------------------------

console.log('\n');

function segundoMaior(vetor) {
    let segundoMaior = Math.min(...vetor);
    
    let maior = Math.max(...vetor);
    
    for(let item of vetor) {
        if(item != maior && item > segundoMaior) {
            segundoMaior = item;
        }
    }
    
    console.log(segundoMaior);
}

segundoMaior([12, 16, 1, 5]);
segundoMaior([8, 4, 5, 6]);

//-------------------Opção-------------------//

function segundoMaior(numeros) {
    const maiorNumero = Math.max(...numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(...numeros)
    console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5]);
segundoMaior([8, 4, 5, 6]);

//-------------------Opção-------------------//

function segundoMaior(numeros) {
    const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
    const segundoMaior = numerosOrdenados[1]
    console.log(segundoMaior)
}

segundoMaior([12, 16, 1, 5]);
segundoMaior([8, 4, 5, 6]);

//----------------------//------------------------------//----------------------------

console.log('\n');

function recerberMelhorEstudante(objeto) {
    const saida = {
        nome: '',
        media: 0,
    };
    
    for(let chave in objeto) {
        let mediaAluno = 0;
        let somaAluno = 0;
        
        for(let item of objeto[chave]) {            
            somaAluno += item;
        }
        
        mediaAluno = somaAluno / objeto[chave].length;
        
        if(mediaAluno > saida.media) {
            saida.nome = chave;
            saida.media = mediaAluno;
        }
    }
    
    console.log(saida);
}

recerberMelhorEstudante({
    Joao: [8, 7.6, 8.9, 6], // média 7.625
    Mariana: [9, 6.6, 7.9, 8], // média 7.875
    Carla: [7, 7, 8, 9] // média 7.75
});

//-------------------Opção-------------------//

// const soma = array => array.reduce((acumulador, atual) => acumulador + atual, 0)
// const media = array => soma(array) / array.length
// function recerberMelhorEstudante(estudantes) {
//     const estudantesComMedias = Object.entries(estudantes).map( estudante => {
//         const chave = 0,
//         valor = 1
//         return { nome: estudante[chave], media: media(estudante[valor]) }
//     })
//     const estudantesOrdenados = estudantesComMedias.sort( (estudanteA, estudanteB) => estudanteB.media - estudanteA.media )
//     const melhorEstudante = estudantesOrdenados[0]
//     console.log(melhorEstudante);
// }

// recerberMelhorEstudante({
//     Joao: [8, 7.6, 8.9, 6], // média 7.625
//     Mariana: [9, 6.6, 7.9, 8], // média 7.875
//     Carla: [7, 7, 8, 9] // média 7.75
// });