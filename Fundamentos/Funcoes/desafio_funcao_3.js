// Declaração de variávies
let P1;
let P2;
let P3;
var saida;
let media;

// Inicialização de variáveis
P1 = 10.8;
P2 = 10.1;
P3 = 2.1;
// saida = '';

// Regras de negócio
function discartaMenorNota(P1, P2, P3) {
    if(P1 <= P2 && P1 <= P3) {
        return [P2, P3];
    }
    else if(P2 <= P1 && P2 <= P3) {
        return [P1, P3];
    }
    else if(P3 <= P1 && P3 <= P2) {
        return [P1, P2];
    }
}

function retornaMedia([N1, N2]) {
    return (N1 + N2) / 2;
}

function retornaStatusAluno(P1, P2, P3) {
    media = retornaMedia(discartaMenorNota(P1, P2, P3));
    // console.log('teste1');
    
    if(media >= 7.0) {
        // console.log('teste');
        saida = 'Aprovado!';
    }
    else if(media >= 4.0) {
        saida = 'Recuperação!';
    }
    else {
        saida = 'Reprovado!';
    }
}

retornaStatusAluno(P1, P2, P3);

// Impressão de resultados
console.log('O aluno foi ' + saida);