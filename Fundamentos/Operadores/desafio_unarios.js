let a = 1;
let b = 2;

console.log(++a === b++); /* Maior precedência do operador pré fixado,
depois da comparação estrita e por fim do operador pós fixado, resultando em TRUE
É uma péssima prática, já que a complexidade da linha a cima é muito alta
o que torna o código pouco entendível. Abaixo a correspondencia mais adequada.
*/

a++;
console.log(a === b);
b++;

//-----------------//------------------//-----------------//--------------//------------

console.log('\n');

// Ferramenta específica do JS para conversão de qualquer tipo de valor em boolean
console.log(!!true);
console.log(!!false);

console.log('\n');
console.log(!!' ');
console.log(!!'');
console.log('\n');

console.log(!!1);
console.log(!!0);
console.log(!!-0.00002);