import PropTypes from "prop-types";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";

const Return = ({ destinyRoute }) => {
  return (
    <Link
      to={destinyRoute}
      className="return-link"
      style={{ position: "absolute", left: 10, top: "20px", color: "yellow" }}
    >
      <AiFillHome color="#fff" fontSize={24} />
    </Link>
  );
};

Return.propTypes = {
  destinyRoute: PropTypes.string.isRequired,
};

export default Return;
