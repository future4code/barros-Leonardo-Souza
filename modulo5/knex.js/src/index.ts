import express from "express"

import { connection } from "./connection";

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

import { Request, Response } from "express"

// EXERCICIO 1

// A) A query retorna um array com duas posições, um referente a resposta e outra sendo informações do banco de dados.

// B) 

app.get("/actor", async (req:Request, res:Response):Promise<void> => {
    const body = req.body.name; 
    let errorCode = 400
    let result
    try {
        if (!body) {
            errorCode = 400;
            throw new Error("Body is missing, try again.");
        } else {
            result = await connection.raw(
                `
                    SELECT * FROM Actor WHERE Actor.name="${body}"
                `
            )
        }
        if (!result) {
            errorCode = 404;
            throw new Error("Name not found");
        } else {
            res.status(200).send(result[0])
        }
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})


// C) 

app.get("/actor/:gender", async(req:Request, res:Response):Promise<void> => {
    const gender = req.params.gender
    let errorCode = 400;
    let result
    try {
        if (!gender) {
            errorCode = 400;
            throw new Error("Parameters is missing: gender."); 
        } else{
            result = await connection.raw(
                `
                    SELECT * FROM Actor WHERE Actor.gender = "${gender}"
                `
            )
        }
        if (!result) {
            errorCode = 404;
            throw new Error("No one was found, try using male or female only.");  
        } else {
            res.status(200).send(result[0])
        }
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }

})

// EXERCICIO 2 

// A) 

app.put("/actor", async (req:Request, res:Response):Promise<void> => {
    let result;
    const body = req.body
    try {
        await connection("Actor")
        .update({
            salary:body.salary
        })
        .where({
            id:body.id
        })
        res.send("sucess")
    } catch (error:any) {
        res.send(error.message)
    }
})

// B) 


app.delete("/actor/:id", async (req:Request, res:Response):Promise<void> => {
    let result;
    const id = req.params.id
    try {
        await connection("Actor")
        .where({
            id:id
        })
        .del()
        res.send("sucess")
    } catch (error:any) {
        res.send(error.message)
    }
})

// C)

app.get("/salary", async (req:Request, res:Response):Promise<void> => {
    let result;
    const gender = req.query.gender as string
    let average
    let sum = 0
    console.log({sum});
    try {
        result = await connection("Actor")
        .select('salary')
        .where({
            gender
        })
        const salaries = result.map((element) => {
            return element.salary
        })
        console.log(salaries);
        
        average = salaries.reduce((a, b) => a + b, 0) / salaries.length;
        average = average.toFixed(2)
        console.log(average);
        
        res.send(average)
    } catch (error:any) {
        res.send(error.message)
    }
 })

// //EXERCICIO 3


// // A) 


app.get("/actorId", async(req:Request, res:Response):Promise<void> => {
    const id = req.query.id as string
    try {
        const actor = await connection("Actor")
        .where({
            id:id
        })
        res.status(200).send(actor)
    } catch (error:any) {
        res.send(error.message)
    }
})

// B) 

app.get("/count", async(req:Request, res:Response): Promise<void>=> {
    const gender = req.query.gender as string
    try {
        const countActors = await connection("Actor")
        .where({
            gender
        })
        let result = countActors.length
        console.log({
            quantity:result
        });
        
        res.status(200).send({
            quantity:result
        })
    } catch(err:any) {
        res.send(err.message)
    }
})