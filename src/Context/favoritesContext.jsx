import PropTypes from "prop-types";
import { createContext, useContext, useState, useEffect } from "react";

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (storedFavorites) {
      setFavorites(storedFavorites);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
    console.log(favorites);
  }, [favorites]);

  const addMovieToFavorites = (movie) => {
    setFavorites((prevFavorites) => {
      if (!prevFavorites.some((fav) => fav.id == movie.id)) {
        return [...prevFavorites, movie];
      }
      return prevFavorites;
    });
  };

  const removeMovieFromFavorites = (movieId) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((fav) => fav.id !== movieId)
    );
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, addMovieToFavorites, removeMovieFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

FavoriteProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
