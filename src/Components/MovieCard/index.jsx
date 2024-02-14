import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./style.scss";

const imageUrl = import.meta.env.VITE_IMG;
const MovieCard = ({ movie, showLink = true }) => {

  const roundedAverage = parseFloat(movie.vote_average).toFixed(1);
  const releaseYear = movie.release_date.substring(0, 4);


  return (
    <article className="movie-card">
      <section className="movie-img">
        <img src={imageUrl + movie.poster_path} alt={movie.title} />
      </section>
      <section className="movie-presentation">
        <h2>{movie.title}</h2>
      <span>Release Year: {releaseYear}</span>
        <h3>
          <FaStar /> {roundedAverage}
        </h3>
        {showLink && (
            <Link to={`/movie/${movie.id}`} className="btn-details"><p>Details</p></Link>
        )}
      </section>
    </article>
  );
};

export default MovieCard;
