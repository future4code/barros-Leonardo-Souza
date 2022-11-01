type accountData = {
    cliente:string,
    saldoTotal:number,
    debitos: number[]
}

// entrada
const accountArr = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]


function updateAccounts(array:accountData[]):accountData[] {
    for (const account of array) {
        let sum = account.debitos.reduce((previousValue:number, currentValue:number) => previousValue += currentValue, 0)
        account.saldoTotal -= sum
        account.debitos = []
    }

    const filterNegativeClients = array.filter((element) => {
        return element.saldoTotal < 0
    })

    return filterNegativeClients
}

console.table(updateAccounts(accountArr))