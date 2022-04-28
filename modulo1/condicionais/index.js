// // ------------ EXERCICIO DE INTERPRETAÇÃO DE CODIGO ------------ //
// // 1.
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }

// a) Explique o que o código faz. Qual o teste que ele realiza? 
// O código extrai a resposta do usuário, transforma em numero e guarda na variavel numero, logo após coloca uma condição. Se o numero for divisivel por 2 é impresso no console "passou no teste" do contrario é impresso "não passou no teste"

// b) Para que tipos de números ele imprime no console "Passou no teste"?
// Para numeros pares


// c) Para que tipos de números a mensagem é "Não passou no teste"? 
// Para numeros impares

// O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//Para identificar o preço de determinada fruta

// b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"
// O preço da fruta maçã é R$ 2.25

// c) Considere que um usuário queira comprar uma Pêra, qual seria a mensagem impressa no console se retirássemos o break que está logo acima do default (o break indicado pelo comentário "BREAK PARA O ITEM c.")
// O valor impresso seria do default 


// 3. 
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo
// Criando a variavel numero e extraindo o valor do usuário. 

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// 10 ---> "Esse número passou no teste"
// -10 ---> Nada

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// A variavel let deveria ser criada fora do escopo local para ser utilizada no global.



// ---------------- ExERCICIO DE ESCRITA DE CODIGO ---------------- //
// 1.
let idade = Number(prompt(`Digite sua idade: `))

if (idade >= 18) {
    console.log("Você pode dirigir")
} else {
    console.log("Você não pode dirigir")
}

// 2.
let turno

//loop para repetir a pergunta caso a resposta não corresponder a nenhuma das condições
do {
turno = prompt(`Digite o turno em que você estuda:\n(M) Matutino\n(V) Verpertino\n(N) Noturno`).toUpperCase()
} while (turno !== 'M' && turno !== 'V' && turno !== 'N')
 
// if (turno === 'M') {
//     console.log("Bom dia!");
// } else if (turno === 'V') {
//     console.log("Boa tarde!");
// } else {
//     console.log("Boa noite");
// } 

switch(turno){
    case "M": 
        console.log("Bom dia!");
        break;
    case "V":
        console.log("Boa tarde!");
        break;
    default:
        console.log("Boa noite!")
        break;
}

// 4.
let generoFilme = prompt(`Digite o genero do filme: `).toLowerCase()

let precoFilme = Number(prompt(`Digite o preço do filme: `))

let lanchinho //variavel no escopo global, para ser usada dentro de multiplos escopos aninhados

if (generoFilme === 'fantasia' && precoFilme < 16) {
    // se os valores anteriores forem atendido perguntar do lanchinho
    let aceitasLanchinho = prompt(`Você vai querer um lanche?`).toLowerCase()
    //ninho de condição para caso a pessoa aceitar um lanchinho
        if (aceitasLanchinho === 'sim') {
            lanchinho = prompt(`Qual?\nPipoca\nChocolate`).toLowerCase()
    }
    console.log('Bom filme!');
    //condição dentro do escopo (generoFilme === 'fantasia' && precoFilme < 16) para saber se o lanchinho se refere com 'seu' ou 'sua'
    switch (lanchinho) {
        case 'pipoca':
            console.log(`Aproveite sua ${lanchinho}`);
            break;
    
        case 'chocolate':
            console.log(`Aproveite seu ${lanchinho}`);
            break;
    }  
} else {
    console.log('Escolha outro filme :('); //será impresso caso o primeiro if for falso
}


let nomeCompleto = prompt(`Digite seu nome completo: `).toUpperCase()
let tipoJogo
let etapaJogo
let categoria
let ingressoQuantidade
//loops para evitar erros de digitação ao recolher dados para as variaveis
while (tipoJogo !== "IN" && tipoJogo !== "DO") {
    tipoJogo = prompt(`Digite o tipo de jogo:\nIN\nDO`).toUpperCase()
}

while (etapaJogo !== 'SF' && etapaJogo !== 'DT' && etapaJogo !== 'FI') {
    etapaJogo = prompt(`Digite qual a etapa do jogo:\n(SF) Semi-final\n(DT) Decisão de terceiro lugar\n(FI) Final`).toUpperCase()
}

while (categoria !== 1 && categoria !== 2 && categoria !== 3 && categoria !== 4) {
    categoria = Number(prompt(`Digite uma categoria:\n1\n2\n3\n4`))
}

ingressoQuantidade = Number(prompt(`Digite a quantidade de ingressos que deseja comprar: `))

//exemplo output
// ---Dados da compra--- 
// Nome do cliente:  Soter Padua 
// Tipo do jogo:  Nacional 
// Etapa do jogo:  Final 
// Categoria:  1 
// Quantidade de Ingressos:  10 ingressos 
// ---Valores--- 
// Valor do ingresso:  R$ 1980
// Valor total:  R$ 198

dadosCompra()





function dadosCompra() {
    let valorIngresso
    let dolarReal
    //condições para definir o valor do ingresso
    if (etapaJogo === 'SF') { // caso seja semifinal
        switch (categoria) {
            case 1:
                valorIngresso = 1320
                break;
        
            case 2:
                valorIngresso = 880
                break;
            case 3: 
                valorIngresso = 550
                break;
            default:
                valorIngresso = 220    
        }   
    } else if (etapaJogo === 'DT') { // caso seja decisão para terceiro lugar
        switch (categoria) {
            case 1:
                valorIngresso = 660
                break;
        
            case 2:
                valorIngresso = 440
                break;
            case 3:
                valorIngresso = 330
                break;
            default: 
                valorIngresso = 170 
                break;
        }
    } else if (etapaJogo === 'FI') { // caso seja para final
        switch (categoria) {
            case 1:
                valorIngresso = 1980
                break;
        
            case 2:
                valorIngresso = 1320
                break;
            case 3:
                valorIngresso = 880
                break;
            case 4:
                valorIngresso = 330
                break;
        }
    }
    //condições para definir o tipo de jogo
    if (tipoJogo === 'DO') {
        tipoJogo = "NACIONAL"
    } else if (tipoJogo === 'IN') {
        tipoJogo = 'INTERNACIONAL'
    } 
    //condições para definir a etapa de jogo
    switch (etapaJogo) {
        case 'SF':
            etapaJogo = 'SEMI-FINAL'
            break;
    
        case'DT':
            etapaJogo = 'DECISÃO DE 3º LUGAR'
            break;
        case'FI': 
            etapaJogo = 'FINAL'
            break;
    }
    if (tipoJogo === 'NACIONAL') { // caso seja real
        console.log(`---DADOS DA COMPRA---\nNOME DO CLIENTE: ${nomeCompleto}\nTIPO DE JOGO: ${tipoJogo}\nETAPA DO JOGO: ${etapaJogo}\nCATEGORIA: ${categoria}\nQUANTIDADE DE INGRESSOS: ${ingressoQuantidade} INGRESSOS\n---VALORES---\nVALOR DO INGRESSO: R$ ${valorIngresso}\nVALOR TOTAL: R$ ${valorIngresso * ingressoQuantidade} `);
    } else { //caso seja dolar
        dolarReal = (valorIngresso / 4.10).toFixed(2)
        console.log(`---DADOS DA COMPRA---\nNOME DO CLIENTE: ${nomeCompleto}\nTIPO DE JOGO: ${tipoJogo}\nETAPA DO JOGO: ${etapaJogo}\nCATEGORIA: ${categoria}\nQUANTIDADE DE INGRESSOS: ${ingressoQuantidade} INGRESSOS\n---VALORES---\nVALOR DO INGRESSO: $ ${dolarReal}\nVALOR TOTAL: $ ${dolarReal * ingressoQuantidade} `);
    }
}

