import { BaseDatabase } from "./BaseDatabase";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "LABEFLIX_MOVIE"
    
    create = async({id, title, description, duration_in_minutes, year_of_release}:any):Promise<void> => {
        try {
            await MovieDatabase.connection
            .insert({
                id,
                title,
                description,
                duration_in_minutes,
                year_of_release}
            )
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
            throw new Error(error.message);
        }
    }
}