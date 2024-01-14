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

    if(ano % 4 == 0) {
        if(!(ano % 100 == 0) && ano % 400) {
            saida = true;
        }
    }
    
    console.log(saida);
}

checarAnoBissexto(2020);
checarAnoBissexto(2100);