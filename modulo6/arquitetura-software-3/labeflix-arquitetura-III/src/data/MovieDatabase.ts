import { CustomError } from "../error/CustomError";
import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE"
    
    create = async(input:any):Promise<void> => {
        try {
            console.log(input);
            
            await MovieDatabase.connection
            .insert(input)
            .into(MovieDatabase.TABLE_NAME)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAll = async () => {
        try {
            let result = await MovieDatabase.connection
            .select()
            .from(MovieDatabase.TABLE_NAME)
            return result
        } catch (error:any) {
            throw new CustomError(error.statusCode || 400 , error.message || error.sqlMessage);
        }
    }
}