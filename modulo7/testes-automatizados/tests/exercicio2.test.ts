import { User } from "../src/model/UserAccount";
import { performPurchase } from "../src/services/exercicio1";


it('Testing if balance is greater than purchase', () => {
    let user:User = {
        name:'Lê Barros',
        balance:3000
    }
    let user2:User = {
        name:'teste',
        balance:1537.50
    }
    let result:any = performPurchase(user, 2000)
    expect(result.balance).toBe(1000)
    let resultFloat:any = performPurchase(user2, 1342)
    expect(resultFloat.balance).toBe(195.50)
})

it('Testing if balance is equal the purchase value', () => {
    let user:User = {
        name:"Lê Barros",
        balance:1000
    }
    let result:any = performPurchase(user, 1000)
    expect(result.balance).toBe(0)
})

it('Testing if balance is less than purchase value', () => {
    let user:User = {
        name:'Lê Barros',
        balance:1000
    }
    let result:any = performPurchase(user, 1500)
    expect(result).toBe(undefined)
})