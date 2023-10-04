function bubbleSort(arrayParaOrdenar) {
    const n = arrayParaOrdenar.length; //Verifica tamanho do Array
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arrayParaOrdenar[j] > arrayParaOrdenar[j + 1]) {            
                const varAuxiliar = arrayParaOrdenar[j];
                arrayParaOrdenar[j] = arrayParaOrdenar[j + 1];
                arrayParaOrdenar[j + 1] = varAuxiliar;
            }
        }
    }
}
const arrayUm = [150, 1, 97, 33, 22, 82, 94];
console.log("Array não ordenado:", arrayUm);

bubbleSort(arrayUm);

console.log("Array ordenado:", arrayUm);

const arrayDois = [64, 22, 84, 25, 12, 22, 90, 100, 1, 32, 13, 5, 16, 44];
console.log("Array não ordenado: ", arrayDois);

bubbleSort(arrayDois);

console.log("Array Ordenado: ", arrayDois);
