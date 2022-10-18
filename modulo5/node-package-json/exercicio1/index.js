// a. Criamos uma variavel que armazenara o process.argv[indice]

const name = process.argv[2]
const age = Number(process.argv[3])

function response(name, age) {
    return `Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${age + 7}`
}

console.log(response(name, age));