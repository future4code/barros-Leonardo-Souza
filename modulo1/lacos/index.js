// ------------ EXERCICIO DE INTERPRETAÇÃO DE CODIGO ------------ //

// 1. O codigo esta emitindo um loop que irá atualizar o valor de 'i' a cada loop realizado até que seja < 5. e a cada atualização do 'i' a variavel valor se atualiza somando o valor do indice. o valor impresso em console será 10: 0 + 1 + 2 + 3 + 4.

// 2. a. 19, 21, 23, 25

// b. Sim, só seria necessário retirar o if e manter o consolelog(numero)

// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]

// for (let numero of lista) {
//console.log(numero)
//}

// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0 
// //enquanto quantidade atual for menor que quantidade pedida do usuario, repetir.
// while(quantidadeAtual < quantidadeTotal){ 
//   let linha = "" //variavel para armazenar os astericos
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// 3. Será impresso uma piramide de asteriscos com 4 linhas
// *
// **
// ***
// ****


// ------------ EXERCICIO DE ESCRITA DE CODIGO ------------ //

// passo 1. perguntar ao usuário quantos bichos de estimação tem, se(if) for 0 {mensagem} petQuantidade
//passo 2. if > 0 pedir para dizer o nome deles e armazenar esse nome em um array. a condição para o loop continuar seria até ser < petQuantidade
//passo 3. imprimir o array



// let petQuantidade = Number(prompt(`Digite quantos bichos de estimação você tem: `))
// let petsNome = []
// let perguntarNomes
// if (petQuantidade === 0) {
//     console.log(`Que pena! Você pode adotar um pet!`);
// } else {
//     for (let i = 0; i < petQuantidade; i++) {
//         let perguntarNomes = prompt(`Digite o nome de seu bichinho`)
//         petsNome.push(perguntarNomes)
//     }
// }
// console.log(petsNome);


// 2.


// let numeros = [5, 18, 96, 87, 55]
// let numerosPar = []

// for (const numero of numeros) {
//     console.log(numero / 10);
// }

// //c.
// for (let numero of numeros) {
//     let numeropar = numero % 2
//     if (numeropar === 0) {
//         numerosPar.push(numero)
//     } 
// }

// console.log(numerosPar);


// arrayNumeros = [5, 9, 45, 33, 22, 14, 3]



// let i = 0 //indice

// while (i < arrayNumeros.length) { //loop para percorrer o array
//     console.log(`O elemento do indice ${i} é: ${arrayNumeros[i]} `);
//     i++ 
// }

// maiorMenorNumero(arrayNumeros)

// function maiorMenorNumero(array) {
//     let maiorNumero = 0
//     let menorNumero = array[0]
//     for (let i = 0; i < array.length; i++) {
//         let elementoArray = array[i];
        
//         if (elementoArray > maiorNumero) {
//             maiorNumero = elementoArray
//         } else if (elementoArray < menorNumero){
//             menorNumero = elementoArray
//         }
//     }
//     console.log(`Maior Numero: ${maiorNumero}\nMenor numero: ${menorNumero}`);
// }


// ------------- DESAFIO ------------- //


// do { //loop para certificar que o número não será negativo ou maior que 100
//     numUser = Number(prompt(`Digite um numero de 0 a 100: `))
// } while (numUser < 0 || numUser > 100);
console.log(`Vamos jogar!`);
 
let chuteUser

let numPc = Math.floor(Math.random() * 100) + 1

let i = 0

while (chuteUser !== numPc) {
    
    chuteUser = Number(prompt(`Tente advinhar o numero escolhido: `))
    
    console.log(`O numero chutado foi: ${chuteUser}`);
    
    i++

    if (chuteUser > numPc) {
        console.log(`Errrrrrrrou, é menor`);
    } else if (chuteUser < numPc) {
        console.log(`Errrrrrrrou, é maior`);
    }
}

console.log('Acertou!!!!');
console.log(`O numero de tentativas foi ${i}`);



//Foi facil fazer as alterações, no entanto, tive que ir mudando qual variavel seria usada diversas vezes, poderia ser bem mais facil se tivesse feito uma função que recebesse esses valores e só seria necessário modificar uma vez:

// jogoAdvinharNumero(numPc)

// function jogoAdvinharNumero(num) {
//     while (chuteUser !== num) {
    
//         chuteUser = Number(prompt(`Tente advinhar o numero escolhido: `))
        
//         console.log(`O numero chutado foi: ${chuteUser}`);
        
//         i++
    
//         if (chuteUser > num) {
//             console.log(`Errrrrrrrou, é menor`);
//         } else if (chuteUser < num) {
//             console.log(`Errrrrrrrou, é maior`);
//         }
//     }
    
//     console.log('Acertou!!!!');
//     console.log(`O numero de tentativas foi ${i}`);
    
// }