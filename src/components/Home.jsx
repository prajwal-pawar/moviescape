import { useEffect, useState } from "react";
import MoviesList from "./MoviesList";
import "../styles/home.css";

const Home = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    /* debouncing is when we press any button for search, instead of sending it right away stacking search request on each other, it waits for 300 milsec 
    before sending search request */
    // using setTimeout/ debouncing search for optimizing search results
    const debounce = setTimeout(() => {
      // omdb api url
      const url = `http://www.omdbapi.com/?s=${search}&apikey=b93b756&page=${currentPage}`;

      // fetching movies from api
      const fetchMovies = async () => {
        try {
          setLoading(true);

          const response = await fetch(url);
          const data = await response.json();

          if (data.Response !== "True") {
            setMovies([]);
            setTotalResults(0);
          }

          setMovies(data.Search);
          setTotalResults(parseInt(data.totalResults));

          setLoading(false);
        } catch (err) {
          console.error("Error fetching movies:", err);
          setLoading(false);
        }
      };

      console.log(movies);

      fetchMovies();
    }, 300);

    // Clear the timer on component unmount or when search changes
    return () => clearTimeout(debounce);
  }, [search, currentPage]);

  // go next page
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // go previous page
  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1, 1);
  };

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
      {movies && movies.length > 0 ? (
        <div>
          <MoviesList movies={movies} loading={loading} />

          {/* pagination */}
          <div className="pagination">
            <button
              onClick={handlePrevPage}
              disabled={currentPage == 1}
              className="page-btn"
            >
              Previous page
            </button>
            <span className="page-number">{currentPage}</span>
            <button
              onClick={handleNextPage}
              disabled={currentPage * 10 > totalResults}
              className="page-btn"
            >
              Next Page
            </button>
          </div>
        </div>
      ) : (
        <h1 className="initial-result-message">No Search Results</h1>
      )}
    </div>
  );
};

export default Home;
