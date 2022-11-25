import express, {Request, Response} from "express"

import cors from 'cors'
import { getAddressInfo } from "./services/getAddressInfo"
import { connection } from "./connection"

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

app.get("/info/:cep", async (req:Request, res:Response) => {
    const cep = req.params.cep
    let errorCode = 400
    let result
    try {
        if (!cep) {
            errorCode = 400
            throw new Error("Missing params: 'cep'");
        }
        result = await getAddressInfo(cep)
        if (!result) {
            errorCode = 404;
            throw new Error("Address was not found");
        }
        res.status(200).send(result)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

app.post('/user', async (req:Request, res:Response) => {
    const body = req.body;
    let result
    try {
        await connection.raw(
            `
            INSERT INTO userAddress (cep, logradouro, numero, complemento, bairro, cidade, estado)
            VALUES (
                
                '${body.cep}',
                '${body.logradouro}',
                ${body.numero},
                '${body.complemento}',
                '${body.bairro}',
                '${body.cidade}',
                '${body.estado}'
                )
            `
            
        )
        res.send("Registration successfully Complete")
    } catch (error:any) {
        res.send(error.message)
    }
})