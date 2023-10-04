function criarPessoa(){
    return{
        nome:['fulano','de tal'],
        anoDeNascimento: 1990,
        profissao: 'Estudante',
        calculaIdade: function(){
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    }
}
const pessoa = criarPessoa();
console.log(pessoa);
//--------------------------------------------------------
function criarNovaPessoa(nome,anoDeNascimento,profissao){
    return{
        nome,
        anoDeNascimento,
        profissao,
        calculaIdade: function(){
            return new Date().getFullYear() - this.anoDeNascimento;
        }
    }
}
const novaPessoa = criarNovaPessoa("novo Fulano", 1986, "Programador");
console.log(novaPessoa);
//--------------------------------------------------------
