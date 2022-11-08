import express from "express";

import { users } from "./data";

import { bodyType, UserType } from "./type";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1 

app.get("/users", (req:express.Request, res: express.Response) => {
    try {
        res.status(200).send(users)
    } catch (error) {
        res.status(500).send("Something went wrong with the server. Please try again")
    }
})

// a. Get
// b. Atravéz da URL

// EXERCICIO 2 

app.get("/getUserByType", (req:express.Request, res: express.Response) => {
    const data = req.query.type
    let errorCode:number = 0
    let filteredByType
    try {
        if (data !== UserType.ADMIN && data !== UserType.NORMAL) {
            errorCode = 420
            throw new Error("Type is invalid. Try using 'ADMIN' or 'NORMAL' instead");
        } else {
            filteredByType = users.filter((element) => {
                return element.type === data
            })
            if (filteredByType.length === 0) {
                errorCode = 404
                throw new Error("User not found");
            }
        }
        res.status(200).send(filteredByType)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
        
    }
})

// a. Os dados foram passados via query visto q é apenas uma propriedade.
// b. Utilizando o if para garantir que o dados sejam iguais ao do enum


// EXERCICIO 3

app.get("/user", (req:express.Request, res:express.Response) => {
    let errorCode:number = 0
    let filteredByName;
    try {
        const data = req.query.name as string
        if (!data) {
            errorCode = 420
            throw new Error("Query is invalid. Must pass as name");
        } else if (data) {
            filteredByName = users.filter((element) => {
                return element.name === data
            })
            if (filteredByName.length===0) {
                errorCode = 404
                throw new Error("User not found");   
            }
        }
        res.status(200).send(filteredByName)
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// a. O endpoint deve ser get pois está retornando o array filtrado.

// EXERCICIO 4

app.post("/newuser", (req:express.Request, res:express.Response) => {
    let errorCode: number = 0;
    const body:bodyType = req.body;
    try {
        // check if body exists
        if (!body) {
            errorCode = 420
            throw new Error("Body does not exist or does not match the correct type");
        } else if(body.type !== "ADMIN" && body.type !== "NORMAL") {
            errorCode = 420
            throw new Error("Property type is not supported. Try using 'ADMIN' or 'NORMAL'");
        }
        const newUser = {
            id:Math.random(),
            name:body.name,
            email:body.email,
            type:body.type,
            age: body.age
        }
        users.push(newUser)
        res.status(200).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})

// a. Nada muda com put, porém, semânticamente se usa put para fazer uma alteração em algo já existente, enquanto post adiciona um novo valor


// b. Não é apropriado o método put nesse caso, pois não é semântico