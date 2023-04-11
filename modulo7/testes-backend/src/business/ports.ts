import { AuthenticationData } from "../model/userDTO"

export interface TokenGenerator {
    generateToken({id}:AuthenticationData):string

    tokenData(token:string):AuthenticationData 
}