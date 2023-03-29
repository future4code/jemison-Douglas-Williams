import { v4 as generateId } from 'uuid'
import { MovieDatabase } from '../data/MovieDatabase'

export class MovieBusiness {
    async createMovie({title, description, durationInMinute, yearOfRelease}: any): Promise<void> {
      
      if(!title || !description || !durationInMinute || !yearOfRelease){
          throw new Error("Dados invalido (sid, title, description, duration_in_minutes, year_of_release")
      }  
      
      const id = generateId()
  
      const movieDatabase = new MovieDatabase()
  
      await movieDatabase.createMovie({
        id,
        title,
        description,
        duration_in_minute: durationInMinute,
        year_of_release: yearOfRelease
      })
    }
  }