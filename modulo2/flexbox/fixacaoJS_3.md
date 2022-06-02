function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
  let quantidadeNumeros = 0
  if (arrayDeNumeros.includes(numeroEscolhido)){
    for (numero of arrayDeNumeros){
      if (numero === numeroEscolhido){
        quantidadeNumeros += 1
      }
    }
    return `O número ${numeroEscolhido} aparece ${quantidadeNumeros}x`
  } else {
    return `Número não encontrado`
  } 
}