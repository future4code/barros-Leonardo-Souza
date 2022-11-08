// a.
const myString = "string" // caso o valor seja um numero o typescript gerara um erro

// b.
let myNumber:string|number

// c. 
type Person = {
    name: string,
    age: number,
    favoriteColor:Rainbow 
}

// const user1:Person={
//     name: "Leona",
//     age: 24,
//     favoriteColor: Rainbow.GREEN
// }
// const user2:Person={
//     name: "Leticia",
//     age: 25,
//     favoriteColor: Rainbow.INDIGO
// }
// const user3:Person={
//     name: "Junior",
//     age: 32,
//     favoriteColor: Rainbow.YELLOW
// }

// d. 
enum Rainbow {
    RED = "Vermelho",
    ORANGE = "Laranja",
    YELLOW = "Amarelo",
    GREEN = "Verde",
    BLUE = "Azul",
    INDIGO = "Anil",
    VIOLET = "Violeta"
}

const user1:Person={
    name: "Leona",
    age: 24,
    favoriteColor: Rainbow.GREEN
    }
const user2:Person={
    name: "Leticia",
    age: 25,
    favoriteColor: Rainbow.INDIGO
    }
const user3:Person={
    name: "Junior",
    age: 32,
    favoriteColor: Rainbow.YELLOW
    }






