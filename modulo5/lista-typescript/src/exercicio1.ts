function returnStringWithData(name:string, date:string):string{
    const splitDate = date.split("/")
    return `Olá me chamo ${name}, nasci no dia ${splitDate[0]} do mês ${splitDate[1]} do ano de ${splitDate[2]}`
}

console.log(returnStringWithData("Leona", "21/08/1998"));
