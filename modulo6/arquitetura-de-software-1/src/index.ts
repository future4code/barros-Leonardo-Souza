import express from 'express'
import cors from 'cors'
import { UserController } from './controller/UserController'


export const app = express()
app.use(express.json())
app.use(cors())


app.listen(3003, () => {
   console.log('Servidor rodando na porta 3003')
})

app.get("/", async function(){
   console.log("endpoint teste")
})


const userController = new UserController()
app.get("/user", userController.getAll)

app.post("/user", userController.createUser)

app.delete("/user/:id", userController.deleteUser)
