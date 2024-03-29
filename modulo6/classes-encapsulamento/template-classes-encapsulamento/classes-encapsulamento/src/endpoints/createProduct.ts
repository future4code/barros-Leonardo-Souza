import { Request, Response } from "express"
import { Products } from "../class/Product"
import connection from "../database/connection"
import { TABLE_PRODUCTS } from "../database/tableNames"
import { Product } from "../models/Product"

export const createProduct = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const name = req.body.name
        const price = req.body.price

        if (!name || !price) {
            throw new Error("Body inválido.")
        }

        const newProduct = new Products(
            `${Date.now().toString()}`,
            name,
            price
        )

        newProduct.setProduct(
            `${Date.now().toString()}`,
            name,
            price
        )

        let newProductData = newProduct.getProduct()

        // const newProduct: Product = {
        //     id: Date.now().toString(),
        //     name,
        //     price
        // }

        await connection(TABLE_PRODUCTS).insert({
            id: newProductData.id,
            name: newProductData.name,
            price: newProductData.price
        })
        
        res.status(201).send({ message: "Produto criado", product: newProduct })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}