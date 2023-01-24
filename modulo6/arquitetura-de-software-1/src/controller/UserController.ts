import { Request, Response} from 'express'
import { UserBusiness } from '../business/UserBusiness'


export class UserController {


    createUser = async(req:Request, res:Response):Promise<void> => {
        try {
            const input:any = {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password
            }

            const userBusiness = new UserBusiness()
            await userBusiness.createUser(input)

            res.status(201).send("Sucess!")
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAll = async(req:Request, res:Response) => {
        try {
            let users = await new UserBusiness().getAll()
            res.status(200).send(users)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    deleteUser = async(req:Request, res:Response) => {
        try {
            const input = {
                id:req.params.id
            }
            console.log(input.id);
            await new UserBusiness().deleteUser(input)
            res.send("Sucess!")
        } catch (error:any) {
            throw new Error(error.message);  
        }
    }
}