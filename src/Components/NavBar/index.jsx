import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

import "./style.scss";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      alert("You need to type something");
      return;
    }

    navigate(`/movie-verse/search?q=${search}`);
    setSearch(search);
  };
  return (
    <nav id="navbar">
      <section>
        <h2>
          <Link to="/movie-verse/">
            <BiCameraMovie /> MovieVerse
          </Link>
        </h2>
      </section>
      <form onSubmit={handleSubmit} className="nav-form">
        <input
          type="text"
          placeholder="Search the movies"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
  );
};

export default NavBar;
