function calcularPi(n, termo = 0, sinal = 1) {
    // Verificar se foi alcançado o número  de iterações (dígitos)
    if (n === 0) {
        return 0;
    }
    
    // Calcular o próximo termo da série de Pi
    const proximoTermo = 4 / (termo * 2 + 1);
    
    // Recursivamente somar o próximo termo com o resultado anterior
    return sinal * proximoTermo + calcularPi(n - 1, termo + 1, -sinal);
}

// Usando a função para calcular 1000 dígitos de pi
const numeroDeDigitos = 1000;
const valorPi = calcularPi(numeroDeDigitos);

console.log(`Valor aproximado de Pi com ${numeroDeDigitos} dígitos: ${valorPi}`);

