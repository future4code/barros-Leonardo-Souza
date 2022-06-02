/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

alert(`Boas vindas ao Blackjack!!`)

if(confirm("Quer iniciar uma nova rodada?")){

let cartaUsuario = [comprarCarta(), comprarCarta()] //comprar as duas cartas iniciais
// console.log(cartaUsuario);

let indiceCarta = indiceObj(cartaUsuario, 0) //indiceCarta recebe o indice 0 do array 'cartaUsuario'

let indiceCarta1 = indiceObj(cartaUsuario, 1) //indiceCarta recebe o indice 1 do array 'cartaUsuario'

let cortarLoop = false //inicia false e só muda para true quando precisar cortar um loop

let cartaPc = [comprarCarta(), comprarCarta()] // comprar as duas cartas iniciais para o pc

let indiceCartaPc = indiceObj(cartaPc, 0) //indiceCartaPc recebe o indice 0 do array 'cartaPc'

let indiceCartaPc1 = indiceObj(cartaPc, 1) //indiceCartaPc recebe o indice 0 do array 'cartaPc'

let mensagemPc = (`As cartas do computador são: ${indiceCartaPc.texto} ${indiceCartaPc1.texto}`) //variavel para guardar e exibir as cartas do pc (depos será somado novos valores.)

let pcScore = indiceCartaPc.valor + indiceCartaPc1.valor //Variavel que irá armazenar a pontuação do pc

let userScore = indiceCarta.valor + indiceCarta1.valor // Variavel que irá armazenar a pontuação do usuário
// console.log(userScore);

let mensagem = (`Suas cartas são: ${indiceCarta.texto} ${indiceCarta1.texto}`)
// console.log(mensagem);


while (userScore < 21 && cortarLoop === false) {
   
   if (confirm(mensagem + `\nA carta revelada do computador é: ${indiceCartaPc.texto}\nVocê deseja comprar mais uma carta?`)) {
      let novaCarta = comprarCarta() // novo objeto para ser adicionado ao array
      
      mensagem = mensagem + ` ${novaCarta.texto}` //adicionar nova carta na mensagem
      console.log(mensagem);
      
      cartaUsuario.push(novaCarta) //adicionar uma nova carta ao array
   
      userScore = 0 // resetar o valor a cada while loop
      
      // loop para percorrer todos os valores do array e somar no userScore
      for (i = 0; i < cartaUsuario.length; i++){
         let indice = indiceObj(cartaUsuario, i)
         userScore += indice.valor 
      }

   } else {
      cortarLoop = true //mudar para true para cortar o loop caso o usuario clique em cancelar
   }
}  
   
   if (userScore > 21) { // encerrar o código com essa mensagem caso o usuário atinga o limite 
   //   console.log(mensagemPc);
     alert(mensagem+` Pontuação: ${userScore}\n`+mensagemPc+` Pontuação: ${pcScore}\n`+`\nO computador ganhou!!`);  
  } else {

while (pcScore < userScore && pcScore < 21) { // repetir a compra de cartas para o computador enquanto o valor do computador ser menor que do usuário
      novaCartaPc = comprarCarta() //adicionar objeto a variavel

      mensagemPc = mensagemPc + ` ${novaCartaPc.texto}` //adicionar nova carta no texto
      
      cartaPc.push(novaCartaPc) //mandar o objeto com a nova carta para o array de cartas do pc

      pcScore = 0 // atribuir o valor 0 para inicio do loop

      for (i = 0; i < cartaPc.length; i++){ //loop que irá somar elemento por elemento do array
         let indicePc = indiceObj(cartaPc, i)
         pcScore += indicePc.valor
      }
   }
   // console.log(userScore);
   // console.log(pcScore);
   // console.log(mensagemPc);

   //As condições de derrota porque o usuário ou computador passou de 21 devem vir em primeiro lugar
if (pcScore > 21) { 
   alert(mensagem+` Pontuação: ${userScore}\n`+mensagemPc+` Pontuação: ${pcScore}\n`+'O usuário ganhou!!');   
} else if(userScore > 21) {
   alert(mensagem+` Pontuação: ${userScore}\n`+mensagemPc+` Pontuação: ${pcScore}\n`+'O computador ganhou!!');
} else if ( userScore > pcScore){
   alert(mensagem+` Pontuação: ${userScore}\n`+mensagemPc+` Pontuação: ${pcScore}\n`+'O usuário ganhou!!');
} else if(pcScore > userScore){
   alert(mensagem+` Pontuação: ${userScore}\n`+mensagemPc+` Pontuação: ${pcScore}\n`+'O computador ganhou!!');
} else if (userScore === pcScore){
   alert(mensagem+` Pontuação: ${userScore}\n`+mensagemPc+` Pontuação: ${pcScore}\n`+'Empate!');
}

  }

} else {
   alert("O jogo acabou. "); //caso o usuário não inicie uma nova rodada
}


//função meio inutil mas que eu mantive mesmo assim por medo de estragar o código
function indiceObj(objeto, indice) { 
   return objeto[indice]
}






function comprarCarta() {
   // Cria array de cartas
   const cartas = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
   // Cria array de naipes
   const naipes = ["♦️", "♥️", "♣️", "♠️"]
 
   // Sorteia uma carta
   const numero = cartas[Math.floor(Math.random() * 13)]
 
   // Sorteia um naipe
   const naipe = naipes[Math.floor(Math.random() * 4)]
 
   let valor
 
   // Verifica se é uma das letras e coloca o valor correspondente na variável valor
   if (numero === "A") {
     valor = 11
   } else if (numero === "J" || numero === "Q" || numero === "K") {
     valor = 10
   } else { // Se nao for uma das letras, só converte a string para número
     valor = Number(numero)
   }
 
   // Cria um objeto da carta com as propriedades que vamos precisar: texto e valor
   const carta = {
     texto: numero + naipe,
     valor: valor
   }
 
   return carta
 }