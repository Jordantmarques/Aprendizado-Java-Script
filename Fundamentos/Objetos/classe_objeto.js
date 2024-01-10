class Data { // Internamente é interpretada como função construtora
    dia = 1
    mes = 1
    ano = 2024

    constructor(dia = 1, mes = 1, ano = 2024) {
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }

    dateFormatedShown() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d1 = new Data(); // Criação do objeto -> Espaço de memória reservado para armazenar valores numéricos diferentes
d1.dia = 24;
d1.mes = 12;
d1.ano = 2022;

console.log(d1)
console.log(d1.dateFormatedShown());

const d2 = new Data(31, 12, 2022); // Criação do objeto -> Sem espaço de memória reservado

console.log(d2);
d2.dateFormatedShown();

console.log(typeof d1);
console.log(typeof Data);