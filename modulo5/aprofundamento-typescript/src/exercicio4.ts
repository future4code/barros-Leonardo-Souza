// a. 

type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b. tsc exercicio4.ts

// c. É possível definir o diretório raíz como src por meio do tsconfig.json. dessa forma, o comando tsc sozinho iria procurar por todos arquivos dentro da pasta src.

// d. É possivel transpilar multiplos arquivos colocando o nome de cada arquivo separado por espaços ou só o comando tsc sozinho na pasta com os arquivos.