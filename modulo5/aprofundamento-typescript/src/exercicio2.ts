
// a.
function obterEstatisticas(numeros:number[]):{} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


// b. A entrada deve ser um number e a saida um objeto, a variavel soma ja esta sendo tipada como number ao ser atribuida com o valor 0

const ageSample = {
    numbers: [21, 18, 65, 44, 15, 18],
    obterEstatisticas: (numbers:number[]):{}=> {
        const numerosOrdenados = numbers.sort(
            (a, b) => a - b
        )
    
        let soma = 0
    
        for (let num of numbers) {
            soma += num
        }
    
        const estatisticas = {
            maior: numerosOrdenados[numbers.length - 1],
            menor: numerosOrdenados[0],
            media: soma / numbers.length
        }
    
        return estatisticas
    }
    }


console.log(ageSample.obterEstatisticas(ageSample.numbers));
