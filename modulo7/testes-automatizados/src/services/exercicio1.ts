import { User } from "../model/UserAccount";

export function performPurchase(user: User, value: number): User | undefined {
    let result
    if (user.balance >= value) {
        result = {
            name:user.name,
            balance:user.balance - value
        }
        return result
    } else {
        return undefined
    }
}