import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./style.scss";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {
  const roundedAverage = parseFloat(movie.vote_average).toFixed(1);

  return (
    <section className="movie-card">
      <img src={imageUrl + movie.poster_path} alt={movie.title} />
      <div>
        <h2>{movie.title}</h2>
        <h3>
          <FaStar /> {roundedAverage}
        </h3>
      </div>
      {showLink && (
        <button>
          <Link to={`/movie/${movie.id}`}>Details</Link>
        </button>
      )}
    </section>
  );
};

export default MovieCard;
