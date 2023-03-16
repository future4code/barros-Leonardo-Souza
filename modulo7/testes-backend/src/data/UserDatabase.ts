import { UserRepository } from "../business/UserRepository";
import { User } from "../model/userDTO";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase implements UserRepository {
    private static TABLE_NAME = "User_Arq"


    getById = async(id:string):Promise<User | undefined> => {
        try {
            let result:User | undefined = await BaseDatabase.connection
            .select()
            .where({id})
            .from(UserDatabase.TABLE_NAME)

            return result
        } catch (error:any) {
            throw new Error(error.message || error.sqlMessage); 
        }
    }
    
}