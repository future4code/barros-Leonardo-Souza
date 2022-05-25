function calculaPrecoTotal(quantidade) {
  // Escreva seu código aqui
  let preco
  let valorFinal
  if (quantidade >= 12){
  preco = 1
}else {
  preco = 1.30
}
valorFinal = preco * quantidade

return valorFinal
}
