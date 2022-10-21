const letters = "mesa".length

function anagram(word:string):number {
    const wordLength = word.length
    let fatorial = wordLength
    
    for (let index = 1; index < wordLength; index++) {
        fatorial = fatorial *  index
    }
    return fatorial
}


console.log(anagram("Gato"));
