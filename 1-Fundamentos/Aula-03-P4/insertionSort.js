function insertionSort(arrayParaOrdenar) {
    const n = arrayParaOrdenar.length;
    for (let i = 1; i < n; i++) {
        const chave = arrayParaOrdenar[i];
        let j = i - 1;
        
        while (j >= 0 && arrayParaOrdenar[j] > chave) {
            arrayParaOrdenar[j + 1] = arrayParaOrdenar[j];
            j--;
        }        
        arrayParaOrdenar[j + 1] = chave;
    }
}

// Exemplo de uso:
const arrayUm = [1, 190, 3, 75, 13];
console.log("Array não ordenado:", arrayUm);

insertionSort(arrayUm);

console.log("Array ordenado:", arrayUm);
