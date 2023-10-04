//02a_let.js
function testVar() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
}
testVar()

//02b_let.js Gera erro pois let02 não é acessível 
function testVar() {
    let let01 = "let 01"
    {
        let let02 = "let 02"
        console.log("01a." + let01)
        console.log("01b." + let02)
    }
    console.log("02a." + let01)
    console.log("02b." + let02)
}
testVar()

//02c_let.js Ger erro pois a redefinição da varavel let01 não é suportada
function testVar() {
    let let01 = "let 01"
    {
        console.log("01a." + let01)
        let let01 = "let 02"
        console.log("02a." + let01)
    }
    console.log("03a." + let01)
}
testVar()   