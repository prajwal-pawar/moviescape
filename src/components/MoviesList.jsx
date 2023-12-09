const MoviesList = (props) => {
  // destructuring props
  const { movies } = props;

  return (
    <div className="movies-list">
      {movies && movies.map((movie, index) => <p>{movie.Title}</p>)}
    </div>
  );
};

export default MoviesList;
