function Pessoa (nome, anoDeNascimento, profissao){
    this.nome = nome;
    this.anoDeNascimento = anoDeNascimento;
    this.profissao = profissao;
    this.calculaIdade = function(){
        return new Date().getFullYear - this.anoDeNascimento;
    }
};

const pessoa = new Pessoa(['Pedro','de Alcantara'], 1960, 'aposentado');
console.log(pessoa);

Pessoa.prototype.saudar = function(){
    console.log("oi");
}
console.log(pessoa);