const myMap = new Map();
myMap.set(0, 'zero');
myMap.set(1, 'um');

for (const [key, value] of myMap){
    console.log(key + ' = ' + value);
}

for (const key of myMap.keys()){
    console.log(key);
}

for (const value of myMap.values()){
    console.log(value);
}

for (const[key, value] of myMap.entries()){
    console.log(key + ' = ' + value)
}