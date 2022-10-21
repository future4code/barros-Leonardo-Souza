type inventoryType = {
    nome:string,
    quantidade: number,
    valorUnitario:any
}


const inventory : inventoryType[]= [
	{ nome: "MacMugffin", quantidade: 37, valorUnitario: 51.040},
	{ nome: "Vassoura voadora", quantidade: 56, valorUnitario: 210.0},
	{ nome: "Laço da verdade", quantidade: 32, valorUnitario: 571.5},
	{ nome: "O precioso", quantidade: 1, valorUnitario: 9181.923},
	{ nome: "Caneta de 250 cores", quantidade: 123, valorUnitario: 17},
	{ nome: "Plumbus", quantidade: 13, valorUnitario: 140.44},
	{ nome: "Pokebola", quantidade: 200, valorUnitario: 99.9915}
]

const getPrices = inventory.map((element) => {
    return element.valorUnitario
})


function newInventory(arr:inventoryType[]):inventoryType[] {
    
    for (let index = 0; index < arr.length; index++) {
        let valorAjustado: string = inventory[index].valorUnitario.toFixed(2).replace('.', ',')
        arr[index].valorUnitario = valorAjustado
    }
    let sortInventory = arr.sort(
        (a, b) => (a.quantidade < b.quantidade) ? 1 : (a.quantidade > b.quantidade) ? -1 : 0);
    return sortInventory
}


console.table(newInventory(inventory))
