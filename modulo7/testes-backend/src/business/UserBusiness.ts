import { AuthenticationData } from "../model/userDTO";
import { TokenGenerator } from "./ports";
import { UserRepository } from "./UserRepository";

export class UserBusiness {
    constructor(
        private UserDatabase:UserRepository,
        private tokenGenerator:TokenGenerator
        ){}

    getById = async(token:string) => {
        try {
            if (!token) {
                if (!token) {
                    throw new Error("Missing authorization");
                }
                let id: AuthenticationData = this.tokenGenerator.tokenData(token)
                let userId: any = await this.UserDatabase.checkIfExists(id.id)
                userId = JSON.parse(JSON.stringify(userId))
    
                if (userId[0].id !== id.id) {
                    throw new Error("Token is invalid");
                }
                return await this.UserDatabase.getById(id.id)
            }
        } catch (error:any) {
            
        }
    }
}