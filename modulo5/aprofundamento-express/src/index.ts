import express from "express";

import { toDoList } from "./data";

import { getToBeDone } from "./functions";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());



app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1

app.get("/ping", (req: express.Request, res: express.Response) => {
    res.send("pong")
})

const newList = getToBeDone(toDoList);

//EXERCICIO 4

app.get("/tobedone", (req: express.Request, res: express.Response) => {
    res.status(200).send(newList)
})

// EXERCICIO 5

app.post("/createtodo", (req: express.Request, res: express.Response) => {
    const newTask = req.body.title
    const userToAdd = Number(req.headers.auth)

    if (!newTask || !userToAdd) {
        res.status(400).send("Missing body or headers")
    } else {
        toDoList.push({
            userId: userToAdd,
            id: Date.now(),
            title: newTask,
            completed:false
        })
        res.status(200).send(toDoList)
    }
})

// EXERCICIO 6 

app.put("/editstatus", (req:express.Request, res:express.Response) => {
    const statusToAdd = req.body.id;

    if (!statusToAdd) {
        res.status(400).send("Missing body")
    } else {
        for (let index = 0; index < toDoList.length; index++) {
            if (toDoList[index].id === statusToAdd) {
                toDoList[index].completed = !toDoList[index].completed
            }
        }
        res.status(200).send(toDoList)
    }
})

// EXERCICIO 7

app.delete("/deletetask/:id",(req:express.Request, res:express.Response) => {
    const idToDelete = Number(req.params.id)

    if (!idToDelete) {
        res.status(400).send("Missing params")
    } else {
        const newList = toDoList.filter((element) => {
            return element.id !== idToDelete;
        });
        res.status(200).send(newList)
    }

})

// EXERCICIO 8

app.get("/getusertasks/:userId", (req:express.Request, res:express.Response) => {
    const userTasksId = Number(req.params.userId)
    if (!userTasksId) {
        res.status(400).send("Missing params")
    } else {
        const filterByUserId = toDoList.filter((element) => {
            return element.userId === userTasksId
        })
        res.status(200).send(filterByUserId)
    }
})