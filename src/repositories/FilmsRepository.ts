import { IFilm } from "../interfaces/Film";


//c59c5316
class FilmsRepository {

    private readonly API_URL = 'http://www.omdbapi.com/'
    private readonly API_KEY = 'c59c5316'

    private async request(url: string): Promise<any> {
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(response.statusText);
        }
    
        return response.json();
      }

    public readonly filmList = async (): Promise<IFilm[]> => {
        try {
          const response = await fetch(`${this.API_URL}?apikey=${this.API_KEY}&s=Spiderman`); // Replace with your actual API URL
    
          if (!response.ok) {
            throw new Error(response.statusText);
          }
    
          const data = await response.json(); // Consume the response once
    
          return data.Search as IFilm[];
        } 
        catch (error) {
          console.error('Error fetching film list:', error);
          throw error; // Re-throw the error for the component to handle
        }
      };
}

export default FilmsRepository;