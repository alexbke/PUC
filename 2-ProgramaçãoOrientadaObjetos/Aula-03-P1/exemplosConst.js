//03a_const.js Gera dois erros, const01 não pode receber novo valor, const02 não é acessível fora do bloco
function testConst() {
    const const01 = "const 01"
    {
        const const02 = "const 02"
        console.log("01a." + const01)
        console.log("01b." + const02)
    }
    const01 = "novo valor"
    console.log("02a." + const01)
    console.log("02b." + const02)
}
testConst()

//03b_const.js Funciona corretamente
function testConst() {
    const const01 = { propriedade: "valor" }
    console.log("01a." + const01.propriedade)
    const01.propriedade = "novo valor"
    console.log("02a." + const01.propriedade)
}
testConst()

//03c_const.js Gera Erro, pos a redefinição do objeto não é permitida
function testConst(){
    const const01={propriedade: "valor"}
    console.log("01a."+const01.propriedade)
    const01 = {propriedade: "novo valor"}
    console.log("02a."+const01.propriedade)
    }
    testConst()