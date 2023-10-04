function Pessoa(){
    this.nome = ['Fulano','de tal'];
    this.anoDeNascimento = 1990;
    this.profissao = "estudante";
    this.calculaIdade = function(){
        return new Date().getFullYear - this.anoDeNascimento;
    }
};
const pessoa = new Pessoa();
console.log(pessoa.valueOf());

console.log(Object.getPrototypeOf(pessoa));
//--------------------------------------------------------
const pessoa2 = Object.create(pessoa);
console.log(Object.getPrototypeOf(pessoa2));
//--------------------------------------------------------
