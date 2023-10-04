//02b_basicPromiseFail.js
const myFirstPromise = new Promise((resolve, reject) => {
    setTimeout(() => reject("Rejeitado"), 2000);
});
let ifFail = (err) => console.log(`Uma exceção foi lançada`);
myFirstPromise
    .then(
        (msg) => console.log("All rigth!!"),
        (msg) => { throw "Não fui atendido!!!" })
    .catch(ifFail)
console.log("Fim do programa")