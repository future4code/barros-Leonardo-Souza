enum accountType {
    ADMIN = "admin",
    USER = "user"
}

type arrayType = {
    name:string,
    email:string,
    role:string
}

const array = [
	{name: "Rogério", email: "roger@email.com", role: "user"},
	{name: "Ademir", email: "ademir@email.com", role: "admin"},
	{name: "Aline", email: "aline@email.com", role: "user"},
	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
	{name: "Adilson", email: "adilson@email.com", role: "user"},  
	{name: "Carina", email: "carina@email.com", role: "admin"}      
] 

function adminOnly(array:arrayType[]):any {
    const filteredArray = array.filter((element) => {
        return element.role === accountType.ADMIN
    })
    const emailOnly = filteredArray.map((element) => {
        return element.email
    })
    return emailOnly
}

console.table(adminOnly(array))