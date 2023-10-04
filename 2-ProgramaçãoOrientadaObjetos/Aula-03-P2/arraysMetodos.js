let a = [1, 2, 2];
console.log(a.indexOf(2));
console.log(a.indexOf(2, 2));
console.log(a.lastIndexOf(2));
console.log(a.includes(0));

let b = [1, 2, 3];

let i = b.findIndex(function (item) {
    return item >= 2;
});
let e = b.findIndex(function (item) {
    return item >= 0 && item <= 2;
});


a.forEach(function (item, index) {
    console.log(`${item} na posição ${index}`);
});