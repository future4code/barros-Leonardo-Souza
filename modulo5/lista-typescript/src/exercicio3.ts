enum GENRE {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type output = {
    name:string,
    releaseYear: number,
    genre:GENRE,
    score?:number
}

function returnType(name:string, releaseYear:number, genre:GENRE, score?:number):output {
    let type:output = {
        name: name,
        releaseYear:releaseYear,
        genre:genre,
        score: score
    }
    return type
}

console.table(returnType("Get Out", 2017, GENRE.TERROR))