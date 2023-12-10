import { Link } from "react-router-dom";
import Loader from "./Loader";
import placeholderImg from "../assets/images/placeholder-img.png";
import "../styles/movielist.css";

const MoviesList = (props) => {
  // destructuring props
  const { movies, loading } = props;

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="movies-list">
      {movies &&
        movies.map((movie, index) => (
          <Link to={`/${movie.imdbID}`} key={`movie-${index}`} id="movie-link">
            <div key={`movie-${index}`} className="movies-container">
              <img
                src={movie.Poster === "N/A" ? placeholderImg : movie.Poster}
                alt={`${movie.Title} poster`}
                id="movie-poster"
              />
              <p id="movie-title">{movie.Title}</p>
              <p id="movie-type">
                {movie.Type} ({movie.Year})
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
