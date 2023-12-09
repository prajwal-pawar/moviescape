import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/:movieId" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
