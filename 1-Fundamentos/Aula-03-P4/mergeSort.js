function mergeSort(arrayParaOrdenar) {
    if (arrayParaOrdenar.length <= 1) {
        return arrayParaOrdenar; 
    }
   
    const meio = Math.floor(arrayParaOrdenar.length / 2);
    const metadeEsquerda = arrayParaOrdenar.slice(0, meio);
    const metadeDireita = arrayParaOrdenar.slice(meio);
    
    console.log("Metade Direita:  ", metadeDireita);
    console.log("Metade Esquerda: ", metadeEsquerda);
 
    const metadeEsquerdaOrdenada = mergeSort(metadeEsquerda);
    const metadeDireitaOrdenada = mergeSort(metadeDireita);
    
    console.log("Metade Direita  Ordenada: ", metadeDireitaOrdenada);
    console.log("Metade Esquerda Ordenada: ", metadeEsquerdaOrdenada);

    return merge(metadeEsquerdaOrdenada, metadeDireitaOrdenada);
}

function merge(metadeEsquerda, metadeDireita) {
    let resultado = [];
    let indiceEsquerda = 0;
    let indiceDireita = 0;
    
    while (indiceEsquerda < metadeEsquerda.length && indiceDireita < metadeDireita.length) {
        if (metadeEsquerda[indiceEsquerda] < metadeDireita[indiceDireita]) {
            resultado.push(metadeEsquerda[indiceEsquerda]);
            indiceEsquerda++;
        } else {
            resultado.push(metadeDireita[indiceDireita]);
            indiceDireita++;
        }
    }
    
    return resultado.concat(metadeEsquerda.slice(indiceEsquerda), metadeDireita.slice(indiceDireita));
}

const arrayUm= [4, 52, 30, 6, 9, 14, 66, 67, 89, 74, 1, 10, 61, 16, 31];
console.log("Array não ordenado:", arrayUm);

const arrayOrdenado = mergeSort(arrayUm);

console.log("Array ordenado:", arrayOrdenado);
