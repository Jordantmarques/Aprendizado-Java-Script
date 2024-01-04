// Repetições determinadas -> for
// Repetições indeterminadas -> while

let quantidade = 0;

while(Math.random() < 0.8) {
    quantidade++;
}

console.log('Quantidade: ' + quantidade);

//-------------//------------------//------------------------//------------------

console.log('\n');

const futuro = Date.now() + 1000;
let quantidade1 = 0;

while(Date.now() < futuro) {
    quantidade1++;
}

console.log('Quantidade: ' + quantidade1);