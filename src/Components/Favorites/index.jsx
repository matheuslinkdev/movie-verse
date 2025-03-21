import PropTypes from "prop-types";
import MovieCard from "../../Components/MovieCard";
import Return from "../../Components/Return";

const Favorites = ({ favorites }) => {
  return (
    <>
      <Return destinyRoute={`movie-verse/favorites`} />
      <h2>My Favorites: </h2>
      <article
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "15px",
          justifyContent: "center",
        }}
      >
        {favorites.length === 0 && <h2>No favorites added yet!</h2>}
        {favorites.length > 0 &&
          favorites.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </article>
    </>
  );
};

Favorites.propTypes = {
  favorites: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Favorites;
