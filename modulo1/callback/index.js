// -------------- EXERCICIOS DE INTERPRETAÇÃO DE CODIGO -------------- // 
 // 1.
//     const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
//   console.log(usuarios);
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // a. Será impresso os objetos fora do array informando o indice do array que esse objeto estava ocupando
  // 2.
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

  // a.será retornado um novo array somente com a propriedade nome do array anterior

  // 3. 
//   const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

  // a. o código irá filtrar os arrays mandando para outro array somente os objetos que não tem Chijo na propriedade apelido


//   // --------------- EXERCICIOS DE ESCRITA DE CODIGO --------------- // 
  // 1. 
  const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
// a.
 const arrayNomesPet = pets.map((element, index, array) => {
     return element.nome
 })

 console.log(arrayNomesPet);

 // b. 
 const arraySalsichas = pets.filter((element, index, array) => {
     return element.raca === 'Salsicha'
 })

console.log(arraySalsichas);

// c.
const descontoPoodle = pets.filter ((element, index, array) => {
    if (element.raca === "Poodle") {
        console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${element.nome}`);
    }
})

console.log(descontoPoodle);


// 2.

const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 // a.
 const nomesProduto = produtos.map ((element, index, array) => {
     return element.nome
 })

 console.log(nomesProduto);

 // b. 
 const descontoProduto = produtos.map ((element, index, array) => {
     let desconto = element.preco * (15/100)
    console.log(element.nome, Number(element.preco) - desconto);
 })

 console.log(descontoProduto);

 // c.
 const somenteBebidas = produtos.filter((element, index, array) => {
     return element.categoria === "Bebidas"
})

console.log(somenteBebidas);

// d.
const produtosYpe = produtos.filter((element, index, array) => {
    if (element.nome.includes("Ypê")) {
        return element
    }
})
console.log(produtosYpe);


const mensagemYpe = produtosYpe.map((element, index, array) => {
    return `Compre ${element.nome} por R$${element.preco}`
})

console.log(mensagemYpe);



// ---------------- DESAFIO ---------------- //

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

 // a.

const pokemosOrdemAlf = pokemons.map ((element, index, array) => {
    return element.nome
})

console.log(pokemosOrdemAlf.sort())

// b.


