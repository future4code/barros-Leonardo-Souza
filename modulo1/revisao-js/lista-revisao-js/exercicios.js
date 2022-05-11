// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    let novoArray = []
    let arrayLength = array.length
    for (let i = arrayLength - 1; i > -1; i--) {
      const element = array[i];
      novoArray.push(element)
    }
    return novoArray
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    listaArray = array.sort((a , b) => a - b)
    return listaArray
    }


// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let numeroPar = []
    for (const numero of array) {
      if (numero % 2 === 0) {
          numeroPar.push(numero)
      }

  }
  return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let novoArrayElevado = []
    for (const numero of array) {
        if (numero % 2 === 0) {
            novoArrayElevado.push(numero*numero)
        }
    }
    return novoArrayElevado
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNumero = 0
    for (const numero of array) {
        if (numero > maiorNumero) {
            maiorNumero = numero
        }
    }
    return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumeroEntredois 
    let menorNumero 
        if (num1 > num2) {
            maiorNumeroEntredois = num1
            menorNumero = num2

        } else {
            maiorNumeroEntredois = num2
            menorNumero = num1
        }
    
    let divisao = (maiorNumeroEntredois % menorNumero) === 0
    let resto = maiorNumeroEntredois - menorNumero  
    
    objetoDoisNum = {
        maiorNumero: maiorNumeroEntredois,
        maiorDivisivelPorMenor: divisao,
        diferenca: resto
    }
    return objetoDoisNum

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numerosPar = [0]
    let soma = 0
    let i = 0
    while(i < n - 1) {
        soma = soma +  2
        numerosPar.push(soma)  
        i++
    }
    return numerosPar
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB && ladoB === ladoC) {
        return "Equilátero"
    } else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {  
        return "Escaleno"
    } else {
        return "Isósceles"
    }
    

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}