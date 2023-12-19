import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import "../styles/home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    /* debouncing is when we press any button for search, instead of sending it right away stacking search request on each other, it waits for 300 milsec 
    before sending search request */
    // using setTimeout/ debouncing search for optimizing search results
    const debounce = setTimeout(() => {
      // omdb api url
      const url = `http://www.omdbapi.com/?s=${search}&apikey=b93b756`;

      // fetching movies from api
      const fetchMovies = async () => {
        try {
          setLoading(true);

          const response = await fetch(url);
          const data = await response.json();

          setMovies(data.Search);
          setLoading(false);
        } catch (err) {
          console.error("Error fetching movies:", error);
          setLoading(false);
        }
      };

      console.log(movies);

      fetchMovies();
    }, 300);

    // Clear the timer on component unmount or when search changes
    return () => clearTimeout(debounce);
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
