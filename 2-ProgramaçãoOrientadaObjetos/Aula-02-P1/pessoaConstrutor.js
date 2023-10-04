function Pessoa(){
    this.nome = ['Fulano','de tal'];
    this.anoDeNascimento = 1990;
    this.profissao = "estudante";
    this.calculaIdade = function(){
        return new Date().getFullYear - this.anoDeNascimento;
    }
};
const pessoa = new Pessoa();
console.log(pessoa);
//--------------------------------------------------------
/*function novaPessoa(nome, anoDeNascimento, profissao){
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear - this.anoDeNascimento;
    }
};
const novaPessoa = new novaPessoa(['fulano'],1990,estudante);
console.log(novaPessoa);*/
//--------------------------------------------------------

const pessoa2 = new Object();
console.log(pessoa);

pessoa2.nome = ['nome'];
pessoa2.anoDeNascimento = 1990;
pessoa2.profissao = 'garçom';
pessoa2.calculaIdade = function(){
    return new Date().getFullYear - this.anoDeNascimento;
}

console.log(pessoa2);

//--------------------------------------------------------
const pessoa3 = new Object();

pessoa3.nome = ['nova pessoa'];
pessoa3.anoDeNascimento = 1970;
pessoa3.profissao = 'pedreiro';
pessoa3.calculaIdade = function(){
    return new Date().getFullYear - this.anoDeNascimento;
}

console.log(pessoa3.constructor);