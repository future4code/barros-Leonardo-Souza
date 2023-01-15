import { BaseDatabase } from "./BaseDatabase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDatabase {
    public async getAllUsers () {
        let result = await BaseDatabase.connection(TABLE_USERS)
        .select()
        return result
    }

    public async createUser (id:string, email:string, password:string) {
        await BaseDatabase.connection(TABLE_USERS)
        .insert({
            id:id,
            email:email,
            password:password
        })
    }

    public async getUserById (id:string) {
        await BaseDatabase.connection(TABLE_USERS)
        .select()
        .where({
            id
        })
    }
}