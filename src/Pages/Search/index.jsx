import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../Components/MovieCard";
import NavBar from "../../Components/NavBar";
import Return from "../../Components/Return";
const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
  const [searchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  const getSearchedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovies(data.results);
  };

  useEffect(() => {
    const searchWithQueryUrl = `${searchUrl}?${apiKey}&query=${query}`;

    getSearchedMovies(searchWithQueryUrl);
  }, [query]); //add query to the rendered movies change every time tht the search content changes

  return (
    <>
      <Return destinyRoute={`movie-verse/search`} />
      <NavBar query={query} />
      <h2>
        Results to: <span>{query}</span>
      </h2>
      <article
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {movies.length === 0 && <h2>Movie not found</h2>}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </article>
    </>
  );
};

export default Search;
