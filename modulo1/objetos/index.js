// // ------------ EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO ------------- //
// // 1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) //Matheus Natchtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) //Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) //canal: Globo, horario: 14h

// // 2.
// // a.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)//
// //nome: "Juca", 
// // idade: 3, 
// //raca: "SRD"

// console.log(gato)
 
// //nome: "Juba", 
// //idade: 3, 
// //raca: "SRD"

// console.log(tartaruga)
// //nome: "Jubo", 
// //idade: 3, 
// //raca: "SRD"

// // b.
// // A sintaxe trata-se de um espalhamento e sua função é criar uma cópia de um objeto ou array, armazenando em outro endereço de memória

// // 3.
// // a.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) //false
// console.log(minhaFuncao(pessoa, "idade")) //undefined

// b.
// A função está fazendo com que o parametro propriedade seja um valor do array objeto


// //------------------ EXERCICIO DE ESCRITA DE CODIGO ------------------ //
// //ex.
// Exemplo de entrada
// const pessoa = {
//   nome: "Amanda", 
//   apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// Exemplo de saída
//"Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"


const pessoaApelido = {
  nome: "Leticia",
  apelido: ["Lê", "Leti", "Lêlê" ]
}

function apresentacao (pessoa) {
  console.log(`Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]}, ${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`)
}

apresentacao(pessoaApelido)

const pessoaApelido1 = {
  ...pessoaApelido,
  apelido: ["Leh", "let", "ticia"],

}

apresentacao(pessoaApelido1)

// 2. 
//ex. 
// const pessoa = {
// 	nome: "Bruno", 
//   idade: 23, 
// 	profissao: "Instrutor"
// }

// minhaFuncao(pessoa)

// // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

//criar dois objetos
const pessoa = {
  nome: "Leticia",
  idade: 24,
  profissao: "Desenvolvedora" 
}

const pessoa1 = {
  nome: "Leonardo",
  idade: 23,
  profissao: "estudante",
}

function pessoaInfo(pessoa)  {
  //nova array para armazenar as info
  let pessoaArray = [pessoa.nome]
  //ver o tamanho da palavra ignorando os espaços iniciais e finais
  pessoaLength = pessoa.nome.trim().length
  //adicionar ao array
  pessoaArray.push(pessoaLength, pessoa.idade, pessoa.profissao)
  // length da profissão
  profissaoLength = pessoa.profissao.trim().length
  //adicionar length da profissão
  pessoaArray.push(profissaoLength)
  //imprimir info
  console.log(pessoaArray);
}

pessoaInfo(pessoa)

// //3.
// // a.
let carrinho = []

// b.
const fruta = {
  nome: "Banana",
  disponibilidade: true, 
}

const fruta1 = {
  ...fruta,
  nome: "Maçã"
}

const fruta2 ={
  ...fruta,
  nome: "Maracujá"
}

// c.
const stagingArea = (carrinho, fruta) => {carrinho.push(fruta)}


stagingArea(carrinho, fruta1)
stagingArea(carrinho, fruta)
stagingArea(carrinho, fruta2)

 console.log(carrinho);
 console.log(controleEstoque(fruta1))


// ----------------- DESAFIO ----------------- //
// 1.
//Crie um função que pergunte ao usuário seu nome, sua idade e sua profissão e depois imprima no console um objeto com essas propriedades. Depois de imprimir o novo objeto, imprima também o tipo dele para garantir que é um objeto.

function usuarioInfo () {
  const user = {
    nome: prompt("Digite seu nome: "),
    idade: prompt("Digite sua idade: "),
    profissao: prompt("Digite sua profissão"),
  }
  console.log(user)
  
}
usuarioInfo()

// 2.
//Crie uma função que receba dois objetos que representam filmes. Eles devem ter as propriedades: ano de lançamento e nome. A função deve retornar uma mensagem no seguinte modelo:

//O primeiro filme foi lançado antes do segundo? false
//O primeiro filme foi lançado no mesmo ano do segundo? true

// passo 1: criar um objeto para cada filme
// passo 2: imprimir a mensagem: "... do segundo?" filme.launchYear < filme1.launchYear
// passo 3: imprimir a mensagem "... do segundo?" filme.launchYear === filme1.launchYear

const filme = {
  nome: "Encanto",
  launchYear: 2021,
}

const filme1 = {
  nome: "Bless Me, Ultima",
  launchYear: 2013,
}

function filmesLancamento(filme, filme1) {
  console.log('O primeiro filme foi lançado antes do segundo?', filme.launchYear < filme1.launchYear)
  console.log('O primeiro filme foi lançado no mesmo ano do segundo?', filme.launchYear === filme1.launchYear);
}

 filmesLancamento(filme, filme1)

// 3. Crie uma função a mais pro exercício 3 de escrita de código. Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido

function controleEstoque(frutaEstoque) {
  
  const disponibilidadeInvertida = {
    ...frutaEstoque,
    disponibilidade: !true

  }
  return disponibilidadeInvertida

}