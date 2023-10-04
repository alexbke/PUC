function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0];
    }
    if (n === 2) {
        return [0, 1];
    }
    const resultadoAnterior = fibonacci(n - 1);
    resultadoAnterior.push(resultadoAnterior[resultadoAnterior.length - 1] + resultadoAnterior[resultadoAnterior.length - 2]);
    return resultadoAnterior;
}

// Exemplo de uso da função fibonacci
const n = 10; // O número até o qual você deseja calcular a sequência de Fibonacci
const resultado = fibonacci(n);

console.log(`Sequência de Fibonacci até ${n}:`);
console.log(resultado.join(', ')); // Converte o array em uma string para exibição
