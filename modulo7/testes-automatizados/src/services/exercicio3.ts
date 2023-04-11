import { Casino, Result, User } from "../model/UserCasino";

export function casinoSystem(casino:Casino, user: User): Result {
    let result:Result = 
    {
        brazilians: {
            allowed:[],
            unallowed:[]
        },
        americans:{
            allowed:[],
            unallowed:[]
        }
    }
    if (user.nacionality === 'BRAZILIAN' && casino.location === 'BRAZIL') {
        if (user.age >= 18) {
            result = {
                brazilians: {
                    allowed:[...user.name],
                    unallowed:[]
                },
                americans:{
                    allowed:[],
                    unallowed:[]
                }
            }        
        } else {
            result = {
                brazilians: {
                    allowed:[],
                    unallowed:[...user.name]
                },
                americans:{
                    allowed:[],
                    unallowed:[]
                }
            }
        }
    } else if (user.nacionality === 'BRAZILIAN' && casino.location === 'EUA') {
        if (user.age >= 21) {
            result = {
                brazilians: {
                    allowed:[...user.name],
                    unallowed:[]
                },
                americans:{
                    allowed:[],
                    unallowed:[]
                }
            }        
        } else {
            result = {
                brazilians: {
                    allowed:[],
                    unallowed:[...user.name]
                },
                americans:{
                    allowed:[],
                    unallowed:[]
                }
            }
        }
    } else if (user.nacionality === 'AMERICAN' && casino.location === 'BRAZIL') {
        if (user.age >= 18) {
            result = {
                brazilians: {
                    allowed:[],
                    unallowed:[]
                },
                americans:{
                    allowed:[...user.name],
                    unallowed:[]
                }
            }  
        } else {
            result = {
                brazilians: {
                    allowed:[],
                    unallowed:[]
                },
                americans:{
                    allowed:[],
                    unallowed:[...user.name]
                }
            }
        }
    } else if(user.nacionality === 'AMERICAN' && casino.location === 'EUA'){
        if (user.age >= 21) {
            result = {
                brazilians: {
                    allowed:[],
                    unallowed:[]
                },
                americans:{
                    allowed:[...user.name],
                    unallowed:[]
                }
            }  
        } else {
            result = {
                brazilians: {
                    allowed:[],
                    unallowed:[]
                },
                americans:{
                    allowed:[],
                    unallowed:[...user.name]
                }
            }
        }
        }
        return result
    }
