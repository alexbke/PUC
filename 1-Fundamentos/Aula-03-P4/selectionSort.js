function selectionSort(arrayParaOrdenar) {
    const n = arrayParaOrdenar.length;

    for (let i = 0; i < n - 1; i++) {
        let indiceMenor = i;        
        for (let j = i + 1; j < n; j++) {
            if (arrayParaOrdenar[j] < arrayParaOrdenar[indiceMenor]) {
                indiceMenor = j;
            }
        }        
        if (indiceMenor !== i) {
            const varAuxiliar = arrayParaOrdenar[i];
            arrayParaOrdenar[i] = arrayParaOrdenar[indiceMenor];
            arrayParaOrdenar[indiceMenor] = varAuxiliar;
        }
    }
}

const arrayUm = [132, 7, 1, 98, 56, 77, 68, 4];
console.log("Array não ordenado:", arrayUm);

selectionSort(arrayUm);

console.log("Array ordenado:", arrayUm);
