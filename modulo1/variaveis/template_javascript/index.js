/*
1 - console.log = (b) ------> será impresso: '10'

console.log = (a, b) -------> será impresso: '10, 5'

----------------------------------------------------

2 - O script pergunta ao usuário duas perguntas e armazena as respostas em suas devidas variaveis.
Depois o script imprime uma mensagem dividindo os valores das variaveis para calcular quanto o usuario ganha por hora.

Um melhor nome para as variaves seria:  

p ----> horasTrabalho

t ----> salarioDia

Dessa forma é possivel identificar melhor o que cada variavel significa. 

*/
//criar variavel para armazenar um nome
let nome

//criar variavel para armazenar uma idade
let idade

//imprimir na tela o tipo de variavel
console.log (typeof nome, idade) //é impresso undefined porque não foi atribuido valor as variaveis

//adicionar a resposta do usuário a variavel 'nome'
nome = prompt ("Digite seu nome: ")

//adicionar a resposta do usuário a variavel 'idade'
idade = prompt ("Digite sua idade: ")

console.log (typeof(nome), typeof(idade)) //console emite string string, pois o prompt sempre entende o que foi colocado como string

//imprimir na tela uma mensagem utilizando os valores das variaveis
alert (`Olá ${nome}, você tem ${idade} anos`)

// --------- IMPRIMIR 3 PERGUNTAS COM AS RESPOSTAS DO USUÁRIO --------- //


// armazenar as respostas nas variaveis criadas
let pergunta = prompt ("Você está usando uma roupa azul hoje? SIM/NÃO")

let pergunta1 = prompt ("Você tem animais de estimação? SIM/NÃO")

let pergunta2 = prompt ("Você gosta de gatos? SIM/NÃO")

// IMPRIMIR
console.log (`Você está usando uma roupa azul hoje? ${pergunta}`)

console.log (`Você tem animais de estimação? ${pergunta1}`)

console.log (`Você gosta de gatos? ${pergunta2}`)


// -------- TROCAR O VALOR DE UMA VARIÁVEL PELA OUTRA -------- //

let a = 10 
let b = 25

//criar variavel constante para armazenar os valores atuais de cada variavel
const aConst = a 
const bConst = b

//trocar os valores das variaveis utilizando os valores armazenadas em const
a = bConst
b = aConst

//imprimir no console o resultado
console.log (a, b)

// ----------- DESAFIO ----------- //

/* 
1 - prompt o primeiro e segundo numero para o usuário e armazenar em uma variavel
2 - converter para variavel do tipo number
3 - somar os dois numeros e armazenar na variavel x
4 - multiplicar os dois numeros e armazenar na variavel y 
5 - imprimir os numeros no console 
*/

let n = prompt ("Digite um número inteiro: ") //primeiro número

let n1 = prompt ("Digite outro número para ser somado e multiplicado: ") //segundo número

//CONVERTER A VARIAVEL PARA NUMBER
const nConv = Number(n)

const n1Conv = Number(n1)

//SOMAR E MULTIPLICAR
let x = nConv + n1Conv 

let y = nConv * n1Conv 


//IMPRIMIR 
console.log (x, y)



