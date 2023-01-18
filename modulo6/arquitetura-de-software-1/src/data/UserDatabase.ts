import { userArr } from "../types";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

    insertUser = async (user: any) => {
        try {           
            await BaseDatabase.connection.insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            }).into('User_Arq')
        } catch (error: any) {
            throw new Error(error.message)

        }
    }
    generateId = (length: number): string => {
        const characters =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let stringLength = characters.length;
        let id = "";
        for (let index = 0; index < length; index++) {
            id += characters.charAt(Math.floor(Math.random() * stringLength));
        }
        return id;
    }

    getAll = async () => {
        try {
            let users:userArr[] = []
            let result = await BaseDatabase.connection.select('*').from('User_Arq')

            for (const user of result) {
                users.push(user)
            }

            return users
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    deleteUser = async(id:string) => {
        try {
            await BaseDatabase.connection
            .from('User_Arq')
            .where({id})
            .delete()
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }


}