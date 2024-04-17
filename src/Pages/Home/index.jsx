import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../../Components/MovieCard";
import NavBar from "../../Components/NavBar";
import Return from "../../Components/Return";
import Favorites from "../../Components/Favorites"; // Importar o componente de favoritos

const moviesURL = import.meta.env.VITE_API;
const ApiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
  const [topMovies, setTopMovies] = useState([]);
  const [favorites, setFavorites] = useState([]); // Estado para armazenar os favoritos

  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  };

  useEffect(() => {
    const topRatedUrl = `${moviesURL}top_rated?${ApiKey}`;

    getTopRatedMovies(topRatedUrl);
  }, []);

  // Função para adicionar um filme aos favoritos
  const addToFavorites = (movie) => {
    if (!favorites.find((fav) => fav.id === movie.id)) {
      setFavorites([...favorites, movie]);
    } else {
      alert("This movie is already in favorites!");
    }
  };

  return (
    <main>
      <NavBar />
      <h2>Top Rated Movies: </h2>
      <article
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
              addToFavorites={addToFavorites}
            />
          ))}
      </article>
      <Favorites favorites={favorites} /> {/* Exibir a lista de favoritos */}
    </main>
  );
};

export default Home;
