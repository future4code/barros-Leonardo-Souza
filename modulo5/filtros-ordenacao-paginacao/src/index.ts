import express, { Request, Response } from "express"

import { connection } from "./connection";

import cors from 'cors'

const app = express()

app.use(express.json())

app.use(cors())

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});


// EXERCICIO 1

// A)
app.get("/user", async (req: Request, res: Response): Promise<void> => {
    let errorCode
    const name = req.query.name
    try {
        const users = await connection.raw(
            `
            SELECT * FROM aula48_exercicio WHERE name LIKE "${name}" 
        `
        )

        if (!users.length) {
            errorCode = 404
            throw new Error("Name was not found")
        }

        res.status(200).send(users[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})

// B) 

app.get("/user/:type", async (req: Request, res: Response): Promise<void> => {
    let errorCode
    const type = req.params.type
    try {
        const users = await connection.raw(
            `
            SELECT * FROM aula48_exercicio WHERE type LIKE "${type}" 
        `
        )

        if (!users.length) {
            errorCode = 404
            throw new Error("Name was not found")
        }

        res.status(200).send(users[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})



// EXERCICIO 2
app.get("/order", async (req: Request, res: Response): Promise<void> => {
    let errorCode
    try {
        const users = await connection.raw(
            `
                SELECT * FROM aula48_exercicio ORDER BY email ASC;
            `
        )
        res.status(200).send(users[0])
    } catch (error: any) {
        res.send(error.message)
    }
})


app.get("/order/:order", async (req: Request, res: Response): Promise<void> => {
    let errorCode
    const order = req.params.order
    try {
        if (!order) {
            const users = await connection.raw(
                `
                    SELECT * FROM aula48_exercicio ORDER BY email ASC;
                `
            )
        }
        const users = await connection.raw(
            `
            SELECT * FROM aula48_exercicio ORDER BY ${order} ASC; 
        `
        )

        if (!users.length) {
            errorCode = 404
            throw new Error("Name was not found")
        }

        res.status(200).send(users[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})


//  // EXERCICIO 3

//  app.get("/users/:page", async(req: Request,res: Response): Promise<void> =>{
//     let errorCode
//     const page = Number(req.params.page)
//     try {
//        const users = await connection.raw(
//         `
//             SELECT * FROM aula48_exercicio LIMIT 5 OFFSET ${(page - 1) * 5}; 
//         `
//        )

//        if(!users.length){
//           errorCode = 404
//           throw new Error("This page doesn't exist")
//        }

//        res.status(200).send(users[0])

//     } catch (error:any) {
//        console.log(error)
//        res.send(error.message || error.sqlMessage)
//     }
//  })

// EXERCICIO 4 

app.get("/users/:page", async (req: Request, res: Response): Promise<void> => {
    let errorCode
    let name = req.query.name;
    let type = req.query.type
    let order = req.query.order
    let desc
    let users
    let page = Number(req.params.page)
    try {
        if (!name) {
            name = "%"
        }
        if (!type) {
            type = "%"
        }
        if (!order) {
            order = "name"
            desc = true
        }
        if (desc === true) {
            users = await connection.raw(
                `
                    SELECT * FROM aula48_exercicio WHERE name LIKE "${name}" AND type LIKE "${type}" ORDER BY ${order} DESC LIMIT 5 OFFSET ${(page - 1) * 5}; 
                `
            )
        } else {
            users = await connection.raw(
                `
            SELECT * FROM aula48_exercicio WHERE name LIKE "${name}" AND type LIKE "${type}" ORDER BY ${order} ASC LIMIT 5 OFFSET ${(page - 1) * 5}; 
        `
            )
        }

        if (!users.length) {
            errorCode = 404
            throw new Error("This page doesn't exist")
        }

        res.status(200).send(users[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
})



