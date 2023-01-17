export class Products {
    constructor(private id:string, private name:string, private price:number){
        this.id=id,
        this.name=name,
        this.price=price
    }

    public setProduct(newId:string, newName:string, newPrice:number):void{
        this.id = newId,
        this.name = newName,
        this.price = newPrice
    }

    public getProduct(){
        return {
            id:this.id,
            name:this.name,
            price:this.price
        }
    }
}