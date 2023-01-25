import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/MovieDatabase'
import { CustomError } from '../error/CustomError';
import { convertSql, MovieDTO } from '../model/MovieModel';

export class MovieBusiness {

    create = async(input:MovieDTO) => {
        try {
            // const movieDatabase = new MovieDatabase
            if (!input.title || !input.description || !input.durationInMinutes || !input.yearOfRelease) {
                throw new CustomError(400, "Theses fields must be filled: 'title', 'description', 'durationInMinutes', 'yearOfRelease'") 
            }
            const id = generateId()
            const data = convertSql(id, input)
            await new MovieDatabase().create(data)
        } catch (error:any) {
            throw new Error(error.message);
            
        }
    }

    getAll = async () => {
        try {
            return await new MovieDatabase().getAll()
        } catch (error:any) {
            throw new CustomError(error.statusCode, error.message);
            
        }
    }
}