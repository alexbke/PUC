var pessoa = {
    nome: "Valentina",
    idade: 60,
    saudar: function(){
        console.log("Olá");
    }
}

var novaPessoa = {
    nome: "Pedro",
    idade: 50,
    saudar: function(nomeAmigo){
        console.log("olá " + nomeAmigo);
    }
}
pessoa.saudar();

console.log(pessoa["nome"]);

pessoa.idade = 30;
console.log(pessoa.idade);

console.log(novaPessoa.saudar("Joana"));