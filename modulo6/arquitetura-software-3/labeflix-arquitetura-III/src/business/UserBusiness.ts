import { UserDatabase } from "../data/UserDatabase"
import { v4 as generateId } from 'uuid'
import { UserDTO } from "../model/UserModel"
import { CustomError } from "../error/CustomError"

export class UserBusiness {
  async create(input:UserDTO):Promise<void> {
    try {
      if (!input.email || !input.name || !input.password) {
        throw new CustomError(400, "These fields must be filled: 'email', 'name', 'password'")
      }
  
      const id = generateId()
  
      const userDatabase = new UserDatabase()
      await userDatabase.create({
        id,
        name:input.name,
        email:input.email,
        password:input.password
      })
      
    } catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
      
    }
  }

  getAll = async() => {
    try {
      let userDatabase = new UserDatabase()
      return await userDatabase.getAll()
    } catch (err:any) {
      throw new Error(err.message);
      
    }
  }

}
