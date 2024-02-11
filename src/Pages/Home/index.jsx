import { useState, useEffect } from "react";

const moviesURL = import.meta.env.VITE_API;
const ApiKey = import.meta.env.VITE_API_KEY;

import './style.scss'

import NavBar from "../../Components/NavBar";
import MovieCard from "../../Components/MovieCard";

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${ApiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  return (
    <main className="container">
      <NavBar />
      <h2>Best Movies: </h2>
      <article className="movies-container">
        {topMovies.length === 0 && <h2>Loading</h2>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </article>
    </main>
  );
};

export default Home;
