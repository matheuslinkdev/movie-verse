import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../../Components/MovieCard";

import './style.scss'

const moviesURL = import.meta.env.VITE_API;
const ApiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${ApiKey}`;
    getMovie(movieUrl);
  });

  return (
    <main>
      {movie && (
        <>
          <article className="movie-details">
            <MovieCard movie={movie} showLink={false} />
            <div>

            <section>
            <p>{movie.tagline}</p>
              <h3>
                <BsWallet2 /> Budget:
              </h3>
              <p>{movie.budget}</p>
            </section>
            <section>
              <h3>
                <BsGraphUp /> Revenue:
              </h3>
              <p>{movie.revenue}</p>
            </section>
            <section>
              <h3>
                <BsHourglassSplit /> Time:
              </h3>
              <p>{movie.runtime} minutes</p>
            </section>
            <section>
              <h3>
                <BsFillFileEarmarkTextFill /> Description:
              </h3>
              <p>{movie.overview}</p>
            </section>
            </div>
          </article>
        </>
      )}
    </main>
  );
};

export default Movie;
