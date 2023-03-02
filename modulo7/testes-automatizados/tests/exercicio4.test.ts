import { Casino, LOCATION, NACIONALITY, User } from "../src/model/UserCasino"
import { casinoSystem } from "../src/services/exercicio3"


let userBR:User= {
    name:'Astrodev BR',
    age:19,
    nacionality:NACIONALITY.BRAZILIAN
}
let brazilianCasino:Casino = {
    name:'Test',
    location:LOCATION.BRAZIL
}
let americanCasino:Casino = {
    name:'Test',
    location:LOCATION.BRAZIL
}
let userEUA:User= {
    name:'Astrodev EUA',
    age:19,
    nacionality:NACIONALITY.AMERICAN
}
it('Testing if a brazilian is allowed to enter a brazilian casino', () => {
    let result = casinoSystem(brazilianCasino, userBR)
    expect(result.brazilians.allowed.length).toBeGreaterThan(0)
})

it("Testing if an american is allowed to enter a brazilian casino", () => {
    let result = casinoSystem(brazilianCasino, userEUA)
    expect(result.americans.allowed.length).toBeGreaterThan(0)
})


