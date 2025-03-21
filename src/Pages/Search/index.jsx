import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../Components/MovieCard";
import { Center, Heading } from "@chakra-ui/react";

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
  }, [query]);

  return (
    <Center>
      <Center mt={20} flexDir="column">
        <Heading size="lg">
          Results to: <span>{query}</span>
        </Heading>
        <Center
        width="95dvw"
        flexWrap="wrap"
        gap="15px"
        >
          {movies.length === 0 && <h2>Movie not found</h2>}
          {movies.length > 0 &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </Center>
      </Center>
    </Center>
  );
};

export default Search;
