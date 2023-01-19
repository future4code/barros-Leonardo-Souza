import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/MovieDatabase'

export class MovieBusiness {

    create = async(input:any) => {
        try {
            // const movieDatabase = new MovieDatabase
            if (!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease) {
                throw new Error("Theses fields must be filled: 'title', 'description', 'durationInMinutes', 'yearOfRelease'"); 
            }
            const id = generateId()
            await new MovieDatabase().create({
                id,
                title:input.title,
                description:input.description,
                duration_in_minutes:input.durationInMinutes,
                year_of_release:input.yearOfRelease
            })
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAll = async () => {
        try {
            return await new MovieDatabase().getAll()
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }
}