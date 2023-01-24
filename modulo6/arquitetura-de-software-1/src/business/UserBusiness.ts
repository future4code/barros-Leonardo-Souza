import { UserDatabase } from "../data/UserDatabase";
import { user } from "../types";


export class UserBusiness {

    createUser = async (user:user):Promise<void> => {

        const { name, email, password } = user
        try {
            if (
                !name ||
                !email ||
                !password
            ) {
                throw new Error("These fields needs to be filled: 'name' 'email' 'password'");
                
            }
            if (user.password.length < 6) {
                throw new Error("Password must have at least 6 characters"); 
            }

            const userDatabase = new UserDatabase()

            const id = userDatabase.generateId(30)
            console.log(id);
            

            await userDatabase.insertUser({
                id,
                name,
                email,
                password
            })
        } catch (err:any) {
            throw new Error(err.message);
        }
    }

    getAll = async () => {
        const userDatabase = new UserDatabase()
        try {
            return await userDatabase.getAll()
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    deleteUser = async (input:any) => {
        try {
            if (!input.id) {
                throw new Error("Insert an Id");
            }
            const userDatabase = new UserDatabase()
            await userDatabase.deleteUser(input.id)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    } 
}