import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Movie = () => {
  const [movie, setMovie] = useState("");

  // getting movie id from url params
  const { movieId } = useParams();

  useEffect(() => {
    // omdb api url
    const url = `http://www.omdbapi.com/?i=${movieId}&apikey=b93b756`;

    // fetching movie information from movie id
    const fetchMovie = async () => {
      const response = await fetch(url);
      const data = await response.json();

      setMovie(data);
    };

    fetchMovie();
  }, [movieId]);

  console.log(movie);

  return (
    <div className="movie-container">
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={`${movie.Title}-poster`} />
      <p>{movie.Actors}</p>
      <p>{movie.Awards}</p>
      <p>{movie.BoxOffice}</p>
      <p>{movie.Country}</p>
      <p>{movie.DVD}</p>
      <p>{movie.Director}</p>
      <p>{movie.Genre}</p>
      <p>{movie.Language}</p>
      <p>{movie.Metascore}</p>
      <p>{movie.Plot}</p>
      <p>{movie.Production}</p>
      <p>{movie.Rated}</p>
      <p>
        {movie.Ratings.map((rating) => (
          <div>
            <p>{rating.Source}</p>
            <p>{rating.Value}</p>
          </div>
        ))}
      </p>
      <p>{movie.Released}</p>
      <p>{movie.Runtime}</p>
      <p>{movie.Type}</p>
      <p>{movie.Writer}</p>
      <p>{movie.Year}</p>
      <p>{movie.imdbRating}</p>
      <p>{movie.imdbVotes}</p>
    </div>
  );
};

export default Movie;
