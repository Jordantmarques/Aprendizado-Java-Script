console.log('\n');

/* Template String -> Colocar os valores das variáveis nas Strings
let i = 3;
'i = ${i} + ...'
*/

const i = 2;
const j = 4;

console.log('i = ' + i + ', j = ' + j);
console.log(`i = ${i}, j = ${j}`); // É usado crase

//------------------- Exemplo Template String ------------//---------------------

console.log('\n');

for(let i = 1; i <= 3; i++) {
    let horizontal = '';
    
    for(let j = 1; j <= 3; j++) {
        horizontal += `[${i}, ${j}]`;
    }
    
    console.log(horizontal);
}