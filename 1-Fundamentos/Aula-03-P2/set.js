var mySet = new Set();
mySet.add(0);
console.log(mySet);
mySet.add(1);
console.log(mySet);
mySet.add(1);
console.log(mySet);
mySet.add(2);
console.log(mySet);
mySet.add(2);
console.log(mySet);

//Remover duplicados
const numeros = [2,3,44,2,3,3,4,4,5,5,6,6,7,5,32,3,4,5];
console.log([new Set(numeros)]);