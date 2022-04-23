// -------------- EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO --------------- //
// 1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }


// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10)) 

// a.
// 10
// 50

// b.
// Nada apareceria no console

// 2. 
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)


// a. 
// A função coloca um texto em letra minuscula e checa se existe a string "cenoura"

// b. 
// I. true 
// II. true
// III. true

// ------------- EXERCÍCIO DE ESCRITA DE CÓDIGO ------------- //
// a.
function info(){
    return "Eu sou Leonardo, tenho 23 anos, moro em Batatais e sou estudante."
}

console.log(info())

//b.

function infoUsuario (nome, idade, endereco, profissao){
    console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereco} e sou ${profissao}.`)

}

infoUsuario("Leticia", 23, "São Carlos", "desenvolvedora")

// 2.
// a.
 function soma(num, num1){
     return num + num1
 }

 console.log(soma(5, 9))

 // b. 
 function numCheck(num, num1){
     return num >= num1
}

console.log(numCheck(6, 6))

// c.
const numPar = (num) =>{
    let check = num % 2
    check = check === 0
    return check
}

console.log(numPar(10))

// d. 
function stringUpperLength(string){
    //let stringUpper = strin 
    console.log(string.toUpperCase()) 
    console.log(string.length)
}

stringUpperLength("arroz com feijão")

// 3. 

function calculos(num, num1){

    let soma = num + num1
    let diferenca = num % num1
    let = multiplicacao = num * num1
    let div = num / num1
    console.log(`Soma: ${soma}\nDiferença: ${diferenca}\nMultiplicação: ${multiplicacao}\nDivisão: ${div}`)
}

let numUser = Number(prompt(`Digite um número: `))
let numUser1 = Number(prompt(`Digite outro número: `))

calculos(numUser, numUser1)

// --------------- DESAFIO --------------- //
// 1. 
// a.
const arrowFunction = (valor) => {
    console.log(valor)
}

arrowFunction("Feijoada")

// b. 
const arrowFunctionSoma = (num, num1) =>{
    return num + num1
}

arrowFunction(arrowFunctionSoma(6, 5))

//2.Faça uma função que execute o teorema de Pitágoras, 
//recebendo dois catetos e calculando o valor da hipotenusa. Retorne este valor, 
//invoque a função e imprima o resultado no console.

//hip = √(a² + b²)

function teoremaPitagoras(cat, cat1){
    let hip = (cat*cat) + (cat1*cat1)
    
     console.log(Math.sqrt(hip))
    
}
let cateto = Number(prompt(`Digite o valor do primeiro cateto: `))
let cateto1 = Number(prompt(`Digite o valor do segundo cateto: `))

teoremaPitagoras(cateto, cateto1)