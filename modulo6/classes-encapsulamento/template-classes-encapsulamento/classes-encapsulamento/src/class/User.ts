
export class User {
    constructor (public id:string, public email:string, public password:string){
        this.email = email,
        this.password = password
    }
    public setUser(newId:string,  newEmail:string, newPassword:string){
        this.id = newId
        this.email = newEmail,
        this.password = newPassword
    }
    public getUser(){
        return {
            id:this.id,
            email:this.email,
            password:this.password
        }
    }
}