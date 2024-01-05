const d1 = 3;
const m1 = 7;
const a1 = 2021;

// Função usa lowerCamelCase
function exibirData1() {   
    console.log(`${d1}/${m1}/${a1}`);
}

const d2 = 25;
const m2 = 12;
const a2 = 2022;

function exibirData2() {
    console.log(`${d2}/${m2}/${a2}`);
}

exibirData1();
exibirData2();

console.log('\n');

//-----------------------//---------------------------//--------------------------

/*
Não precisa passar o tipo de entrada na função pois os tipos são
dinâmicos em java script.
*/
function exibirData(d, m, a) {
    console.log(`${d}/${m}/${a}`);
}

exibirData(d1, m1, a1);
exibirData(d2, m2, a2);
