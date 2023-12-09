import { Link } from "react-router-dom";

const MoviesList = (props) => {
  // destructuring props
  const { movies } = props;

  return (
    <div className="movies-list">
      {movies &&
        movies.map((movie, index) => (
          <Link to={`/${movie.imdbID}`}>
            <div key={`movie-${index}`} className="movie-container">
              <img src={movie.Poster} alt={`${movie.Title}-poster`} />
              <p>{movie.Title}</p>
              <p>{movie.Type}</p>
              <p>{movie.Year}</p>
            </div>
          </Link>
        ))}
    </div>
  );
};

export default MoviesList;
