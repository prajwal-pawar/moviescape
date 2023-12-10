import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import Loader from "./Loader";
import "../styles/home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // omdb api url
    const url = `http://www.omdbapi.com/?s=${search}&apikey=b93b756`;

    // fetching movies from api
    const fetchMovies = async () => {
      setLoading(true);

      const response = await fetch(url);
      const data = await response.json();

      setMovies(data.Search);
      setLoading(false);
    };

    console.log(movies);

    fetchMovies();
  }, [search]);

  return (
    <div className="home">
      {/* search */}
      <div className="search">
        <input
          type="text"
          placeholder="Enter the movie/series name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* movies list */}
      <MoviesList movies={movies} loading={loading} />
    </div>
  );
};

export default Home;
