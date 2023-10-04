let fila = []; // Cria uma fila vazia

fila.push(1); // Adiciona um elemento ao final da fila
console.log("Primeiro Elemento Adicionado na Fila: " + fila);

fila.push(2);
console.log("Segundo  Elemento Adicionado na Fila: " + fila[1]);

fila.push(3);
console.log("Terceiro Elemento Adicionado na Fila: " + fila[2]);

console.log("Elementos da Fila: " + fila);

let elementoRemovido = fila.shift(); // Remove e retorna o primeiro elemento da fila

console.log("Elemento Removido: " + elementoRemovido); // Saída: 1
