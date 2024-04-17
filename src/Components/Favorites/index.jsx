import MovieCard from "../../Components/MovieCard";
import NavBar from "../../Components/NavBar";
import Return from "../../Components/Return";

const Favorites = ({ favorites }) => {
  return (
    <>
      <Return destinyRoute={`movie-verse/favorites`} />
      <NavBar />
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

export default Favorites;
