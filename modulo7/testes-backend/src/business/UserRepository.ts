import { User } from "../model/userDTO";

export interface UserRepository {
    getById(id:string):Promise<User | undefined>

    checkIfExists(id:string):Promise<User | undefined>
}