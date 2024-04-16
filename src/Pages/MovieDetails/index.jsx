import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import MovieCard from "../../Components/MovieCard";

import "./style.scss";
import Return from "../../Components/Return";
import NavBar from "../../Components/NavBar";

const moviesURL = import.meta.env.VITE_API;
const ApiKey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovie = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    console.log(movie);
    setMovie(data);
  };

  useEffect(() => {
    const movieUrl = `${moviesURL}${id}?${ApiKey}`;
    getMovie(movieUrl);
  }, []);

  const formatValue = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <>
      <Return destinyRoute="/movie-verse/" />
      <NavBar />
      {movie && (
        <>
          <article className="movie-details">
            <div>
              <MovieCard movie={movie} showLink={false} />
            </div>
            <div>
              <section>
                <p className="tagline">{movie.tagline}</p>
                <h3>
                  <BsWallet2 /> Budget:
                </h3>
                <p>{formatValue(movie.budget)}</p>
              </section>
              <section>
                <h3>
                  <BsGraphUp /> Revenue:
                </h3>
                <p>{formatValue(movie.revenue)}</p>
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
    </>
  );
};

export default MovieDetails;
