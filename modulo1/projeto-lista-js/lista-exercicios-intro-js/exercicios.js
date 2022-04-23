// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
 function soma(num1, num2) {
//   implemente sua lógica aqui
   return num1 + num2
 }

// EXERCÍCIO 0B
 function imprimeMensagem() {
//   implemente sua lógica aqui
   const mensagem = prompt('Digite uma mensagem!')

   console.log(mensagem)
 }

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
 function calculaAreaRetangulo() {
//   implemente sua lógica aqui
//   passo 1 - Pedir os valores ao usuario e armazenar em variavel tipo num
 let altura = Number(prompt("Digite a altura do retangulo: "))
 let largura = Number(prompt("Digite a largura do retangulo: "))
//   passo 2 - retornar altura * largura 
 const calculaAreaRetangulo =  altura * largura
 console.log (calculaAreaRetangulo) 
 }


// EXERCÍCIO 02
 function imprimeIdade() {
  // implemente sua lógica aqui
   let anoAtual = Number(prompt(`Digite o ano atual: `))
   let anoNascimento = Number(prompt(`Digite seu ano de nascimento: `))
   const imprimeIdade = anoAtual - anoNascimento
   console.log (imprimeIdade)

 }

// EXERCÍCIO 03
 function calculaIMC(peso, altura) {
//   implemente sua lógica aqui
   return peso / (altura * altura)
 }

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
//   implemente sua lógica aqui
//   "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt(`Digite seu nome: `)
  let idade = prompt (`Digite sua idade: `)
  let email = prompt (`Digite seu email: `).toLowerCase()
  const imprimeInformacoesUsuario = `Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`
  console.log(imprimeInformacoesUsuario)
  return imprimeInformacoesUsuario
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  //implemente sua lógica aqui
  let arrayCores = [prompt(`Digite sua primeira cor favorita: `), prompt(`Digite sua segunda cor favorita: `), prompt(`Digite sua terceira cor favorita: `)]

  console.log(arrayCores)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
let stringToUpper = prompt(`Digite uma frase: `).toUpperCase()
return stringToUpper
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
arrayUltimo = array[array.length - 1]
array[array.length - 1] = array[0]
array[0] = arrayUltimo
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
string1 = string1.toUpperCase()
string2 = string2.toUpperCase()

return string1 === string2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = Number(prompt(`Digite o ano atual: `))
let anoNascimento = Number(prompt(`Digite seu ano de nascimento: `))
let idade = anoAtual - anoNascimento
let emissaoId = Number(prompt(`Digite o ano de emissão de sua identidade: `))

 let check // variavel para armazenar o true ou false

 if (idade <= 20) {
 check = (anoAtual - 5) >= emissaoId
 console.log(check)
 

 }
 else if (idade > 20 && idade <= 50) {
  check = (anoAtual - 10) >= emissaoId
  console.log(check)
  
  
 }
 else if (idade > 50){
  check = (anoAtual - 15) >= emissaoId
  console.log(check)
  
  
 }

return 

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  //Deve ser multiplo de 400
  let bissextoCondicao = ano % 400
  //todos os multiplos de 4, exceto se for multiplo de 100, mas não de 400
  let bissextoCondicao1 = ano % 4
  let bissextoCondicao2 = ano % 100
  //todos os demais
  if (bissextoCondicao === 0 || bissextoCondicao1 === 0 && bissextoCondicao2 !== 0){
    console.log(0===0)
    return 0===0
  }else {
    console.log(1===0)
    return 1===0
  }




}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  let idade = (prompt(`Você tem mais de 18 anos? Sim/Não `)).toUpperCase()
  let ensinoMedio = (prompt(`Você já completou o ensino médio? Sim/Não `)).toUpperCase()
  let disponibilidade = (prompt(`Você possui disponibilidade exclusiva durante os horários do curso? Sim/Não`)).toUpperCase()

  if (idade === "SIM" && ensinoMedio === "SIM" && disponibilidade === "SIM"){
    console.log(0===0)
    return 0===0
  } else {
    console.log(1===0)
    return 1===0
  }
}