function quickSort(arrayParaOrdenar) {
    if (arrayParaOrdenar.length <= 1) {
        return arrayParaOrdenar; 
    }
    
    const pivot = arrayParaOrdenar[0];
    const menores = [];
    const maiores = [];

    for (let i = 1; i < arrayParaOrdenar.length; i++) {

        console.log("Pivo : ", pivot);
        if (arrayParaOrdenar[i] < pivot) {
            menores.push(arrayParaOrdenar[i]);
        } else {
            maiores.push(arrayParaOrdenar[i]);  
        }
        console.log("Menores que o Pivo : ", menores);
        console.log("Maiores que o Pivo : ", maiores);
    }    
    
    const menoresOrdenados = quickSort(menores);
    const maioresOrdenados = quickSort(maiores);
   
    return [...menoresOrdenados, pivot, ...maioresOrdenados];
}

const arrayUm = [132, 7, 1, 98, 56, 77, 68, 4];
console.log("Array não ordenado:", arrayUm);

const arrayOrdenado = quickSort(arrayUm);

console.log("Array ordenado:", arrayOrdenado);
