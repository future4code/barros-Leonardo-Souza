import express from 'express'
import { MovieController } from '../controller/MovieController'


export const movieRouter = express.Router()

const movieControler = new MovieController()

movieRouter.get("/all", movieControler.getAll)

movieRouter.post("/create", movieControler.create)
