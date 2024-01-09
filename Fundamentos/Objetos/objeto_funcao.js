function CriarData(dia, mes, ano) { // Nomeclatura de classe segue UperCamelCase
    return {
        dia, // Simplificação de this.dia = dia (java)
        mes, // (js) -> dia: dia
        ano,

        dateFormatedShown() { // Definição de método (função)
            return `${this.dia}/${this.mes}/${this.ano}`;
        },
    };
}

const d1 = CriarData(1, 10, 2011);
const d2 = CriarData(2, 11, 2020);
const d3 = CriarData(3, 12, 2030);

console.log(d1.dateFormatedShown());
console.log(d2.dateFormatedShown());
console.log(d3.dateFormatedShown());

//-----------------//-------------------//------------------------//---------------------

console.log('\n');

// Função construtora (classe) de objetos
function Data(dia = 1, mes = 1, ano = 2021) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.dateFormatedShown = function() {
        return `${this.dia}/${this.mes}/${this.ano}`;
    }
}

const d11 = new Data();
const d12 = new Data(20, 10, 2020);
const d13 = new Data(30, 1, 2024);

console.log(d11);
console.log(d12);
console.log(d13);