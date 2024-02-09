import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

const NavBar = () => {
  return (
      <nav id="navbar">
        <h2>
          <Link to="/"><BiCameraMovie/> MovieVerse</Link>
        </h2>
       <form>
        <input type="text" placeholder="Search the movies" />
        <button type="submit"><BiSearchAlt2/></button>
       </form>
      </nav>
  );
};

export default NavBar;
