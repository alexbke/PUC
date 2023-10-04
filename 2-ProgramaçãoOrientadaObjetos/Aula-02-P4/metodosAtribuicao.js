class Pessoa {
    constructor(nome, anoDeNacimento, profissao) {
        this.nome = nome;
        this.anoDeNacimento = anoDeNacimento;
        this.profissao = profissao;
    };
    ola() {
        console.log("olá");
    };
    calculaIdade() {
        return new Date().getFullYear - this.anoDeNacimento;
    };
};
class Estudante extends Pessoa {
    #matricula;
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    };
    getMatricula() {
        return this.#matricula;
    };
    setMatricula(valor) {
        this.#matricula = valor;
    };
};
const aluno = new Estudante(['Fulano', 'de Tal'], 1990, 'Estudante', 120901);
console.log(aluno.getMatricula());
aluno.setMatricula(158590);
console.log(aluno.getMatricula());