// break -> sai do contexto atual interrompendo o laço
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        break;
    }
    console.log(i);
}

/* continue -> interrompe a repetição atual, sem interromper o laço
(vai pra próxima repetição.
*/
for(let i = 1; i <= 5; i++) {
    if(i === 3) {
        continue;
    }
    console.log(i);
}