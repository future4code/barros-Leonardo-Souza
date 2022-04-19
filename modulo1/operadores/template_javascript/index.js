// -------------- EXERCÍCIOS DE INTERPRETAÇÃO --------------- //
// 1. 

//a. false
//b. false 
//c. true
//d. boolean 

// 2. 

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)


// O erro no código é que falta as variaveis serem convertidas para number, já que o prompt registra como string: 

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// let primeiroNumeroConv = Number (primeiroNumero)
// let segundoNumeroConv = Number (segundoNumero)

// let soma = primeiroNumeroConv + segundoNumeroConv

// console.log(soma)


// --------------- EXECÍCIOS DE ESCRITA DE CÓDIGO --------------- //

// 1. Faça um programa que:
// a) Pergunte a idade do usuário

// b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//c) Imprima na console a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", 
//seguido pela resposta (true ou false

//d) Imprima na console a diferença de idade (não tem problema se sair um número negativo)

//Passo 1 - Perguntar a idade com o prompt e armazenar em variavei idade
//Passo 2 - Perguntas a idade do melhor amigo e armazenar em variavel idadeAmigo
//Passo 2.1 - Converter os valores para number
//Passo 3 - criar uma variavel para armazenar o calculo ex: ageCompare = idade > idadeAmigo
//Passo 4 - Imprimir no console a variavel ageCompare
//Passo 5 - Subtrair as idades e armazenar em idadeDiferenca dps repetir passo 4 com essa variavel

let idade = prompt ("Digite sua idade: ")
let idadeAmigo = prompt ("Digite a idade de seu melhor amigo(a):")

idadeConv = Number (idade)
idadeAmigoConv = Number (idadeAmigo)

let ageCompare = idadeConv > idadeAmigoConv

console.log (`Sua idade é maior do que a do seu melhor amigo? ${ageCompare}`)

let ageDif = idadeConv - idadeAmigoConv

console.log (ageDif)


// 2.

//Passo 1 - pedir um numero par usando o prompt e armazenar na variavel numeroPar
//Passo 2 - criar variavel para armazenar resto: resto = numeroPar % 2

let numeroPar = prompt (`Digite um número par: `)

//conversão
let numeroParConv = Number (numeroPar)

let resto = numeroParConv % 2 

console.log (resto)

//O padrão é que o resultado sempra será zero por a divisão é por 2

//O resultado sempre será 1 em caso de numero impar
 

// 3. 

//Passo 1 - Pedir a idade e armazenar em variavel age 
//Passo 2 - converter o valor para number
//Passo 3 - criar variavel ageMonths = age * 12
//Passo 4 - criar variavel ageDays = age * 365
//Passo 5 - criar variavel ageHours = age * (365 * 24)
//Passo 6 - imprimir

let age = prompt ("Digite sua idade: ")
let ageConv = Number (age)

let ageMonths = ageConv * 12 
let ageDays = ageConv * 365 
let ageHours = ageConv * (365 * 24)

console.log(`Meses: ${ageMonths}\nDias: ${ageDays}\nHoras: ${ageHours}` )


// 4. 

//Passo 1 - criar duas variaveis para armazenar dois numeros diferentes
//Passo 2 - criar variavel e armazenar: numeroMaior = numero > numero1
//Passo 3 - // numeroIgual = numero === numero1 
//Passo 4 - // numeroResto = numero % numero1
//Passo 5 - Criar variavel para saber se a divisão é quebrada: numeroResto = numeroDiv === 0
//Passo 6 - repetir o processo do passo 4 e 5 mas invertendo: numero1 / numero

//ARMAZENAR RESPOSTAS DO USUÁRIO
let numero = prompt ("Digite um número: ")
let numero1 = prompt ("Digite outro número: ")

//CONVERTER
let numeroConv = Number (numero)
let numeroConv1 = Number (numero1)

//IDENTIFICAR SE O PRIMEIRO NUMERO É MAIOR
let numeroMaior = numeroConv > numeroConv1 
console.log (`O primeiro número é maior que o segundo? ${numeroMaior}`)

//IDENTIFICAR SE O NUMERO É IGUAL 
let numeroIgual = numeroConv === numeroConv1
console.log (`O primeiro número é igual ao segundo? ${numeroIgual}`)

//DIVIDIR
let numeroResto = numeroConv % numeroConv1

//VERIFICAR SE É DIVISIVEL 
let numeroDiv = numeroResto === 0 
console.log (`O primeiro número é divisivel pelo segundo? ${numeroDiv}`)

//INVERTER A ORDEM DA DIVISÃO 
numeroResto = numeroConv1 % numeroConv
numeroDiv = numeroResto === 0 
console.log (`O segundo número é divisivel pelo primeiro? ${numeroDiv}`)


// ------------------- DESAFIO -------------------- // 
// 1. 

//a. 
//Passo 1 - criar variavel f = 77
let f = 77 

//Passo 2 - execultar a função de conversão: K = (f -32)* 5/9 + 273.15
let k = (f-32) * 5/9 + 273.15

//Passo 3 - imprimir
console.log (k)

//b. 
let c = 80
f = c * (9/5) + 32
console.log (f)

//c. 
c = 30 

//CONVERTER PARA FAHRENHEIT
f = c * (9/5) + 32

//CONVERTER DE F PARA K 
k = (f - 32)*(5/9) + 273.15

console.log (f, k)


// 2. 
//Passo 1 - armazenar a resposta do usuário na variavel quillowatt e converter para numero
let quillowatt = prompt ("Digite a quantidade de Quillowatt consumida: ")
let quillowattConv = Number (quillowatt)

//Passo 2 - calcular o valor consumido quillowatt 
let valor = quillowattConv * 0.05
console.log (valor)

//Passo 3 - criar variavel para indicar 15 % de valor
let valorDesconto = valor * 0.15

//Passo 4 - calcular valor = valor - valorDesconto
valor = valor - valorDesconto

//imprimir
console.log (valor)