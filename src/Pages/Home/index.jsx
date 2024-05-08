import { useState, useEffect } from "react";
import MovieCard from "../../Components/MovieCard";
import NavBar from "../../Components/NavBar";
import { Flex, Heading } from "@chakra-ui/react";

const moviesURL = import.meta.env.VITE_API;
const ApiKey = import.meta.env.VITE_API_KEY;

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
    <Flex flexDir="column">
      <NavBar />
      <Heading display="flex" justifyContent="center" alignItems="center" color="#fff" size="lg" my={5}>Top Rated Movies: </Heading>
      <Flex
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {topMovies.length === 0 && <h2>Loading</h2>}
        {topMovies.length > 0 &&
          topMovies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
            />
          ))}
      </Flex>
    </Flex>
  );
};

export default Home;
