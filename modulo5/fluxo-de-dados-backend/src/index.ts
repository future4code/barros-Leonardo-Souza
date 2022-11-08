import { generateId } from "./functions";

import { productsType } from "./type";

import { products } from "./data";

import express from "express";

import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});

// EXERCICIO 1
app.get("/test", (req: express.Request, res: express.Response) => {
  res.status(200).send("Server is running in http://localhost:3003");
});

// EXERCICIO 4

app.post("/newproduct", (req: express.Request, res: express.Response) => {
  const body = req.body;
  const checkName = typeof body.name;
  const newId = generateId(10);
  let string = typeof "string";
  const newProduct = {
    id: newId,
    name: body.name,
    price: body.price,
  };
  // EXERCICIO 8
  try {
    if (!body) {
      throw new Error("Missing body");
    } else if (!body.name || typeof body.name !== string) {
      throw new Error("Missing name or name is not a string");
    } else if (body.price <= 0) {
      throw new Error("Price must be greater than zero");
    } else if (!body.price || isNaN(body.price)) {
      throw new Error("Missing price or price is not a number");
    }
    products.push(newProduct);
    res.status(201).send(products);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

// EXERCICIO 5

app.get("/getallproducts", (req: express.Request, res: express.Response) => {
  res.status(200).send(products);
});

// EXERCICIO 6

app.put("/editprice", (req: express.Request, res: express.Response) => {
  const body = req.body.price;
  const id = req.query.id;

  // EXERCICIO 9

  try {
    if (body <= 0) {
      throw new Error("Price must be greater than zero");
    } else if (!body) {
      throw new Error("Body is required");
    } else if (!id) {
      throw new Error("Id is required");
    } else if (isNaN(body)) {
      throw new Error("Price is not a number");
    }
    const findProduct = products.filter((element) => {
      return element.id === id;
    });
    findProduct[0].price = body;
    res.send(findProduct);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
});

// EXERCICIO 7

app.delete("/deleteproduct", (req: express.Request, res: express.Response) => {
  const id = req.query.id;
  // EXERCICIO 10
  try {
    const checkIfProductExist = products.filter((element) => {
      return element.id === id;
    });
    if (!id) {
      throw new Error("Id is required");
    } else if (checkIfProductExist.length === 0) {
      throw new Error("Product not found");
    }
    const filteredProducts = products.filter((element) => {
      return element.id !== id;
    });
    res.status(200).send(filteredProducts);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
