import { IFilm } from "../../interfaces/Film"
import './filmCard.css';

interface IUserCardParams {
    film: IFilm
}

const FilmCard = ({film}: IUserCardParams) => {

    return (
        <div className="movie-card">
            <img className="movie-poster" src={film.Poster} alt={`Фото не найдено`} />
            <div className="movie-details">
                <h1 className="movie-title">{film.Title}</h1>
                <p className="movie-year">{film.Year}</p>
            </div>
        </div>
    );
}

export default FilmCard;

