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
            maiorNumeroEntredois = num1,
            menorNumero = num2

        } else {
            maiorNumeroEntredois = num2
            menorNumero = num1
        }
    
    let divisao = maiorNumeroEntredois % menorNumero === 0
    let resto = maiorNumeroEntredois - menorNumero  
    
    return objetoDoisNum = {
        maiorNumero: maiorNumeroEntredois,
        maiorDivisivelPorMenor: divisao,
        diferenca: resto
    }


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
    //determinar o maior numero
    listaArray = array.sort((a , b) => a - b)
    segundoMaiorEMenor = [listaArray[listaArray.length-2], listaArray[1]]

    return segundoMaiorEMenor

             
    }

  


// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]}, ${filme.atores[3]}.`  
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   obJAnonimo = {
   ... pessoa, 
   nome:"ANÔNIMO"
   }
   return obJAnonimo
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   //ter no mibimo 1,5m
   //ser mais velho que 14 anos
   //mais novo que 60 anos
   return pessoas.filter(pessoa => {
       return (
           pessoa.altura > 1.5 &&
           pessoa.idade > 14 && pessoa.idade < 60

       )
   })
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter(pessoa => {
        return (
            pessoa.altura < 1.5 || pessoa.idade < 15 || pessoa.idade > 59 
        )
    })
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let soma 
    let somaArray = []
    //iniciar com um for of loop para percorrer todo o array
    for (const conta of contas) {
        //dentro do for loop inserir um metodo que some todos os valores de uma propriedade .reduce
        soma = 0
        soma = conta.compras.reduce((prevVal, currVal) => prevVal + currVal, 0)
        //armazenar o valor da soma de cada index em um array de soma
        somaArray.push(soma) 
         // setar o valor da propriedade para 0
         conta.compras = []      
    }
    //iniciar um for loop
    for (let i = 0; i < contas.length; i++) {
        //subtrair a propriedade saldo com o elemento do array soma do mesmo indice: saldo = saldo - soma[i]
        const element = contas[i];
        element.saldoTotal -= somaArray[i]
        
    }
    return contas

}


// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    return consultas.sort( (a, b) => a.nome.localeCompare(b.nome))

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

    soDatas = consultas.map((element, index, array) => {
        return element.dataDaConsulta
    })


    function comparar (a, b) {
        const data1 = new Date(a)
        const data2 = new Date(b)
    
         return data1 - data2
    }
        
    soDatas.sort(comparar)

    return soDatas
} 


