// Atributos Estaticos
class Pessoa {
    static NOME_CLASSE = 'Pessoa-Classe';
        constructor(nome, anoDeNascimento, profissao) {
                this.nome = nome;
                this.anoDeNascimento = anoDeNascimento;
                this.profissao = profissao;
        };
    ola() {
        console.log('Olá');
    };
    calculaIdade() {
            return new Date().getFullYear() - this.anoDeNascimento;
    };
};
console.log(Pessoa.NOME_CLASSE);
//--------------------------------------------------------
//Metodos Estáticos
class PessoaNova {
        constructor(nome, anoDeNascimento, profissao) {
                this.nome = nome;
                this.anoDeNascimento = anoDeNascimento;
                this.profissao = profissao;
        };
        static ola() {
            console.log('Olá');
        };
        calculaIdade() {
            return new Date().getFullYear() - this.anoDeNascimento;
        };
};
console.log(PessoaNova.ola());