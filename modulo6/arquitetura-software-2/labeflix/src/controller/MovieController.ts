import { Request, Response } from 'express'
import { MovieBusiness } from '../business/MovieBusiness'



export class MovieController {
    create = async (req:Request, res:Response):Promise<void> => {
        try {
            const input = {
                title: req.body.title,
                description:req.body.description,
                durationInMinutes:req.body.durationInMinutes,
                yearOfRelease:req.body.yearOfRelease
            }
            const movieBusiness = new MovieBusiness()
            await movieBusiness.create(input)
            res.status(201).send("Movie successfully added!")
        } catch (error:any) {
            throw new Error(error.message);
        }
    }

    getAll = async (req:Request, res:Response) => {
        try {
            let result = await new MovieBusiness().getAll()
            res.status(200).send(result)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}