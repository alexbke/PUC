function Pessoa() {
    let nome = ['Fulano','de Tal'];
    let anoDeNascimento = 1990;
    let profissao = 'Estudante';
    this.calculaIdade = function () {
        return new Date().getFullYear() - anoDeNascimento;
    }
};
const pessoa = new Pessoa();
console.log(pessoa);