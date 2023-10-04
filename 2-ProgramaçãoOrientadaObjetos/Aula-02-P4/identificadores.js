//pré fixados
class Pessoa{
    constructor(nome,anoDeNacimento,profissao){
        this.nome = nome;
        this.anoDeNacimento = anoDeNacimento;
        this.profissao = profissao;
    };
    ola(){
        console.log("olá");
    };
    calculaIdade(){
        return new Date().getFullYear - this.anoDeNacimento;
    };
};
class Estudante extends Pessoa {
    #matricula;
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
    };
    ola() {
        super.ola();
        console.log('colega!');
    };
};
const aluno = new Estudante(['Fulano', 'de Tal'], 1990, 'Estudante',    120901);
console.log(aluno);

class bolsista extends Pessoa {
    #matricula;
    constructor(nome, anoDeNascimento, profissao, matricula) {
        super(nome, anoDeNascimento, profissao);
        this.#matricula = matricula;
        this.#ola();
    };
    #ola() {
        super.ola();
        console.log('bolsista!');
    };
};
const teste = new bolsista(['Fulano', 'de Tal'], 1990, 'bolsista',    120951);
console.log(teste);