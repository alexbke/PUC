let pilha = []; // Cria uma pilha vazia

pilha.push(1); // Adiciona um elemento ao topo da pilha
console.log("Primeiro Elemento Inserido na Pilha: "+ pilha);

pilha.push(2);
console.log("Segundo  Elemento Inserido na Pilha: "+ pilha[1]);

pilha.push(3);
console.log("Terceiro Elemento Inserido na Pilha: "+ pilha[2]);

let elementoRemovido = pilha.pop(); // Remove e retorna o elemento do topo da pilha

console.log("Elemento Removido da Pilha: " + elementoRemovido); // Saída: 3
