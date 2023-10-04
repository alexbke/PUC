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
const pessoa = new Pessoa(['João'],1990,'arquiteto');

console.log(pessoa);
//--------------------------------------------------------
// herança

class Estudante extends Pessoa{
    constructor(nome,anoDeNacimento,profissao,matricula){
        super(nome,anoDeNacimento,profissao);
        this.matricula = matricula;
    }
};
const aluno = new Estudante(['aluno'],1996,'estudante',12567);
console.log(aluno);
//--------------------------------------------------------
// polimorfismo
class Estudantes extends Pessoa{
    constructor(nome,anoDeNacimento,profissao,matricula){
        super(nome,anoDeNacimento,profissao);
        this.matricula = matricula;
    };
    ola(){
    super.ola();
    console.log("colega!");
    };
};
const alunos = new Estudantes(['alunos'],1996,'estudantes',12568);
console.log(alunos);
console.log(alunos.ola());
//--------------------------------------------------------
// referencia
function criarPessoa(){
    return{
        nome: 'pessoa da referencia',
        anoDeNacimento: 1995,
        profissao: 'jogador'
    };
};

const pessoa1 = criarPessoa();
const pessoa2 = pessoa1;
pessoa2.anoDeNascimento = 1980;
console.log(pessoa1);
console.log(pessoa2);
//--------------------------------------------------------
