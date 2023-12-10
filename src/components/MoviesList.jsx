import { Link } from "react-router-dom";
import placeholderImg from "../assets/images/placeholder-img.png";
import "../styles/movielist.css";

const MoviesList = (props) => {
  // destructuring props
  const { movies } = props;

  return (
    <div className="movies-list">
      {movies &&
        movies.map((movie, index) => (
          <Link to={`/${movie.imdbID}`}>
            <div key={`movie-${index}`} className="movies-container">
              <img
                src={movie.Poster === "N/A" ? placeholderImg : movie.Poster}
                alt={`${movie.Title} poster`}
                id="movie-poster"
              />
              <p id="movie-title">{movie.Title}</p>
              <p id="movie-type">{movie.Type}</p>
              <p id="movie-year">{movie.Year}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
