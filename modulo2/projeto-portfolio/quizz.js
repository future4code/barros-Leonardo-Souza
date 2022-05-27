// step 1 - Fazer as perguntas ao usuário --> armazenar em um array as perguntas e utilizar o for loop para percorrer o array
// step 2 - Cada pergunta deve ter uma resposta referente a um resultado ---. armazenar em um container de resultados
// step 3 - escrever uma função que percorre todos os arrays de perguntas com o prompt e armazene as respostas em um novo array
// step 4 - função para comparar as respostas com o container de resultados
// step 5 - declarar os statements. Comparar o valor de cada elemento e emitir uma mensagem diferente para o usuário
// --- Utilizar o filter para achar o maior valor no array
// --- Comparar o objeto.nome do maior array com os statemens: if objeto.nome === "Sentinela" exibir mensagemSentinela

alert(`Boas vindas ao Valorant Quiz!!!\nQual é sua ocupação no Valorant?\nResponda digitando o numero referente a resposta.`)


let questionsContainer = [`Em um dia ensolarado você prefere:\n1. Fazer um piquenique com os amigos\n2. Ficar em casa jogando\n3. Fazer uma trilha\n4. Encher a cara`, 
`Se você estivesse perdido(a) no meio do oceano em um pequeno barco a remo, o que você faria?\n1. Limitaria meus recursos até a ajuda chegar, afinal você está desaparecido(a).\n2. Remaria sem direção até encontrar um pedaço de terra.\n3. Me preocuparia em arrumar mais recursos para sobreviver por mais tempo\n4. Usaria sua bússola de bolso para encontrar o caminho de volta.`,
`O que você faria se ganhasse 100 milhões de dólares?\n1. Compraria uma lancha equipada com rádio para comunicação e GPS para não ter que passar pela mesma situação anterior\n2. Jogaria no jogo do bicho para duplicar o meu dinheiro\n3. Investiria o meu dinheiro de forma segura, pensando a longo prazo\n4. Ajudaria meus amigos e familia que estivessem precisando.`,
`Qual desses lugares você prefere viver?\n1. Em uma tiny house no meio do mato\n2. Em um apartamento de uma grande metrópole\n3. Em uma mansão vitoriana equipada com um bunker para possíveis catastrofes\n4. Em uma casa pequena mas com espaço para um jardim`,
`Qual animal você seria?\n1. Uma lebre chapada\n2. Uma arara azul\n3. Um lobo-guará\n4. Um sapo-cururu`]


let resultsContainer = [
    {nome: 'Sentinela', respostas:["1", "3", "4", "3", "3"], valor: 0, mensagem: `Você é um Sentinela!!!\nVocê é menos inclinado(a) a tomar ações de alto risco e busca sempre proteger os seus amigos.`},
    {nome: 'Duelista', respostas:["4", "2", "2", "2", "1"], valor: 0, mensagem: `Você é um Duelista!!!\nVocê é muito inclinado(a) a tomar ações de alto risco, suas decisões, embora grande parte das vezes impensada, pode deixar um impacto positivo.`},
    {nome: 'Controlador', respostas:["2", "1", "3", "4", "4"], valor: 0, mensagem: `Você é um Controlador!!!\nSuas ações visam um resultado mais eficiente e seguro, um equilibrio entre Sentinela e Iniciador.`},
    {nome: 'Iniciador', respostas:["3", "4", "1", "1", "2"], valor: 0, mensagem: `Você é um Iniciador!!!\nVocê é um(a) explorador(a), nada passa despercebido por você que está sempre um passo a frente.`}
]


//array para armazenar as respostas do usuário
let answers = []

//percorre todas as perguntas e manda as resposta para uma variavel // mudar somente o que vem depois do of
for (const question of questionsContainer) { 
    let resposta = prompt(question)
    answers.push(resposta)
    console.log(answers);
}

//inserir as respostas do usuário e o gabarito como input // Soma o valor do objeto
compararRespostas(answers, resultsContainer); 

console.log(resultsContainer);

//Criar um array para retornar apenas numeros referente ao valor
let valorArray = resultsContainer.map((element, index, array) => {
    return element.valor
})

//separa somente o maior valor do array anterior para usar no filter
let somenteMaiorValor = maiorValor(valorArray);

//função para filtrar o maior valor emitindo um novo array.
const apenasResultado = resultsContainer.filter((element, index, array) => {
    return element.valor === somenteMaiorValor
})
console.log(apenasResultado);
//mapear o array e retornar apenas a mensagem
const mensagem = apenasResultado.map((element, index, array ) => { 
    return element.mensagem

})

//em caso de empate, escolher um numero aleatório entre os empatados
if (mensagem.length > 1) {
    randomMessage = Math.floor(Math.random() * mensagem.length)
    alert(mensagem[randomMessage])
} else {
    alert(mensagem);
    
}

// função que determina qual objeto do array tem o maior valor
function maiorValor(array) { 
    let maiorNumero = 0
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element > maiorNumero ) {
            maiorNumero = element
        }  
    }
    return maiorNumero

}

//função para comparar a resposta com o gabarito, adiciona + 1 ao valor do objeto se a resposta bater com o gabarito.
function compararRespostas (respostas, gabarito) {
    for (let i = 0; i < respostas.length; i++) {
        indiceRespostas = respostas[i]
        for (const elemento of gabarito) {
            if (indiceRespostas === elemento.respostas[i]) {
                elemento.valor = elemento.valor + 1
            }
        }
    }
    return gabarito
}








// function perguntar(perguntas, respostas) {
//     for (let i = 0; i < perguntas.length; i++) {
//         let indice = perguntas[i];
//         console.log(indice);
//         question = prompt(indice)
//         respostas.push(question)
//         return respostas;
        
//     }
    

    
// }

 















// function gerarQuiz(questions, quizContainer, resultsContainer) {
//     //function must have nested function for each step
//     //step1 - function to show questions and push the answer to an array 
//     //function
//     function showQuestions(questions, quizContainer) {
//         for (let i = 0; i < questions.length; i++) {
//             quizContainer.push(questions[0])
            
            
//         }
//     }
// }
