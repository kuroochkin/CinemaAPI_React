import React, { useEffect, useState } from 'react';
import './getFilmList.css'
import FilmsRepository from '../../repositories/FilmsRepository';
import { IFilm } from '../../interfaces/Film';
import FilmCard from '../filmCard/FilmCard';

const filmsRepository = new FilmsRepository();

const GetFilmList: React.FC = () => {
    
    const [films, setFilms] = useState<IFilm[]>([]);

    useEffect(() => {
      const fetchUserList = async () => {
        try {
          setFilms(await filmsRepository.filmList());
        } 
        catch (error) {
          console.error('Error fetching fokm list:', error);
        }
      };
  
      fetchUserList();
    }, []);
  
    return (

        <div>
            {films.length > 0
            ? (
                <div className='film-list-container'>
                    {films.map(film => 
                        <FilmCard film={film}/>)}
                </div>
            ) : (
                <div className='empty'>
                    <h2>Фильмов нет</h2>
                </div>
            )
        }
        </div>
    );
}

export default GetFilmList;