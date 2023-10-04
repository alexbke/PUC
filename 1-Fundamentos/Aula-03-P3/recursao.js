function fatorial(number){
    if (number < 0){
        return undefined;
    }
    let total = 1;
    for (let n = number; n > 1; n--){
        total = total * n;
    }
    return total;
}
console.log(fatorial(5));

//Solução mais Elegante que retorna o mesmo valor que o código exibido acima. 
function fatorialRecursivo(n){
    if (n === 1 || n === 0){
        return 1;
    }

    return n * fatorialRecursivo(n-1);
}

console.log(fatorialRecursivo(5));