import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import placeholderImg from "../assets/images/placeholder-img.png";
import "../styles/movie.css";

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
      <div id="movie-poster">
        <img
          src={movie.Poster === "N/A" ? placeholderImg : movie.Poster}
          alt={`${movie.Title} poster`}
        />
      </div>

      <div id="movie-details">
        <h1>{movie.Title}</h1>
        <div id="basic-info">
          <p>{movie.Year}</p>
          <p>{movie.Runtime}</p>
          <p>{movie.Type}</p>
        </div>
        <p>imdbRating: {movie.imdbRating}</p>
        <p>imdbVotes: {movie.imdbVotes}</p>
        <p>{movie.Plot}</p>

        <hr />

        <p>Cast: {movie.Actors}</p>
        <p>Released: {movie.Released}</p>
        <p>Awards: {movie.Awards}</p>
        <p>{movie.BoxOffice && `Box Office: ${movie.BoxOffice}`}</p>
        <p>Country: {movie.Country}</p>
        <p>{movie.DVD && `DVD : ${movie.DVD}`}</p>
        <p>Writer: {movie.Writer}</p>
        <p>{movie.Director === "N/A" ? "" : `Director: ${movie.Director}`}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Languages: {movie.Language}</p>
        <p>
          {movie.Metascore === "N/A" ? "" : `Metascore: ${movie.Metascore}`}
        </p>
        <p>{movie.Production && `Production: ${movie.Production}`}</p>
        <p>Rated: {movie.Rated}</p>
        <p>
          {movie.Ratings?.map((rating) => (
            <div>
              <p>{rating.Source}</p>
              <p>{rating.Value}</p>
            </div>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Movie;
