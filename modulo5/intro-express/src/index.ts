import express, { Request, Response } from "express";
import { users, posts } from "./data";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1

app.get("/teste", (req: Request, res: Response) => {
  res.send("Hello, world!");
});

// EXERCICIO 4
app.get("/users", (req:Request, res:Response) => {
    res.send(users)
})

// EXERICIO 7
// app.get("/posts", (req: Request, res: Response) => {
//     res.send(posts)
// });

// EXERCICIO 8

app.get("/posts", (req: Request, res: Response) => {
    if (req.query.id) {
        const filteredArray = posts.filter((element) => {
            return element.id === Number(req.query.id)
        })
        res.status(201).send(filteredArray)
    } else {
        res.status(400).send("Missing query")
    }
});