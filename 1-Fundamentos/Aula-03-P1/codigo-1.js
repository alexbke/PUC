function avaliaParidade(limiteSuperior){
    for(let i=0; i<=limiteSuperior; i++){
        
        if(i % 2 === 0){
            console.log(i + " é um numero PAR");
        }
        else{
            console.log(i + " é um numero ÍMPAR");
        }
    }
}
avaliaParidade(10);