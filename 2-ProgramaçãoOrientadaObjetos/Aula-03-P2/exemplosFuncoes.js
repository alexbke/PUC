// 01b_funcaoComParametro
function potencia(base, expoente = 2) {
    let resultado = 1;
    for (let cont = 0; cont < expoente; cont++) {
        resultado *= base;
    }
    return resultado;
}
console.log(potencia());
console.log(potencia(4));
console.log(potencia(2, 6));
console.log(potencia(2, 6, 18));

// 02a_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
function showOk() { console.log("You agreed."); }
function showCancel() { console.log("You canceled the execution."); }
decision("OK", showOk, showCancel);
decision("Cancel", showOk, showCancel);

// 02b_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
decision(
    "OK",
    function () { console.log("You agreed."); },
    function () { console.log("You canceled the execution."); }
);
decision(
    "Cancel",
    function () { console.log("You agreed."); },
    function () { console.log("You canceled the execution."); }
);

// 02c_funcaoComoParametro
function decision(question, doOK, doCancel) {
    if (question == "OK") doOK()
    else doCancel();
}
let beOK = function showOk() { console.log("You agreed."); }
let beCancel = function showCancel() { console.log("You canceled the execution."); }
decision("OK", beOK, beCancel);
decision("Cancel", beOK, beCancel);

// 03a_closure
function somaValores(x) {
    return function (y) {
        return x + y;
    };
}
var soma5 = somaValores(5);
console.log(soma5(2));