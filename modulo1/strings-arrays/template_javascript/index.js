// 1. 

// let array
// console.log('a. ', array) // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] // c. 11
// console.log('c. ', array.length)

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. 3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13

// const valor = array[i+6]
// console.log('f. ', valor) // d. 9

// 2.

//O valor impresso será: SUBI NUM ÔNIBUS EM MIRROCOS 27


// ------------ EXERCICIO DE ESCRITA DE CÓDIGO ------------- //
// 1.

let userEmail = prompt (`Digite seu email: `)
let userName = prompt (`Digite seu nome: `)

console.log (`O e-mail ${userEmail} foi cadastrado com sucesso. Seja bem-vinda(o), ${userName}`)

// 2.

let arrayComidas = ['Pizza','Sushi', 'Brigadeiro', 'Macarrão', 'Bolo']

console.log(`Minhas comidas favoritas são: \n${arrayComidas[0] } \n${arrayComidas[1]} \n${arrayComidas[2]}\n${arrayComidas[3]} \n${arrayComidas[4]}`)

//desafio


let comidaUsuario = prompt("Digite sua comida preferida: ")

arrayComidas[1] = comidaUsuario 
console.log(`Minhas comidas favoritas são: \n${arrayComidas[0] } \n${arrayComidas[1]} \n${arrayComidas[2]}\n${arrayComidas[3]} \n${arrayComidas[4]}`)

3.

let listaDeTarefas = []

listaDeTarefas[0] = prompt (`Digite uma tarefa que precise fazer pela manhã: `).toUpperCase()
listaDeTarefas[1] = prompt(`Digite uma tarefa que precise fazer a tarde: `).toUpperCase()
listaDeTarefas[2] = prompt(`Digite uma tarefa que precise fazer a noite: `).toUpperCase()

console.log(listaDeTarefas)

let tarefaFeita = Number(prompt(`Qual tarefa você já realizou: 
1 . ${listaDeTarefas[0]}
2 . ${listaDeTarefas[1]}
3 . ${listaDeTarefas[2]}`))

let i = tarefaFeita - 1

listaDeTarefas.splice(i, 1)

console.log (listaDeTarefas)


// ------------- DESAFIO ------------- // 










