const colabArr = [
	{ nome: "Marcos", salario: 2500, setor: "marketing", presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: "vendas", presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: "financeiro", presencial: true},
	{ nome: "João" ,salario: 2800, setor: "marketing", presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: "financeiro", presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: "vendas", presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: "marketing", presencial: true }
]

enum SECTOR {
    MARKETING = "marketing",
    VENDAS = "vendas"
}

type colab = {
    nome:string,
    salario:number,
    setor:string,
    presencial:boolean
}


function filterArr(arr:colab[]):colab[] {
    const filteredArray = arr.filter((element) => {
        return element.setor === SECTOR.MARKETING && element.presencial === true
    })
    return filteredArray
}

console.table(filterArr(colabArr))