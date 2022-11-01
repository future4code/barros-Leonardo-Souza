import express from "express";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});


// EXERCICIO 1
app.get("/test", (req:express.Request, res:express.Response) => {
    res.status(200).send("Server is running in http://localhost:3003");
})

// EXERCICIO 4

app.post("/newtask", (req:express.Request, res:express.Response) => {
    const body = req.body;
    try {
        
    } catch (error) {
        
    }
}) 