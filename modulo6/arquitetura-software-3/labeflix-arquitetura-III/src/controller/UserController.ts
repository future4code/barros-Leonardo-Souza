import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserDTO } from "../model/UserModel";

export class UserController {
  async create(req: Request, res: Response):Promise<void> {
    try {
      const input:UserDTO = req.body;

      const userBusiness = new UserBusiness();
      await userBusiness.create(input);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(error.statuCode || 400).send(error.message || error.sqlMessage);
    }
  }

  getAll = async(req:Request, res:Response) => {
    try {
      const userBusiness = new UserBusiness()
      let result = await userBusiness.getAll()
      res.status(200).send({users:result})
    } catch (err:any) {
      throw new Error(err.message);
      
    }
  }
}
