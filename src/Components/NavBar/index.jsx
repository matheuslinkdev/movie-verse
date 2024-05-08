import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

import "./style.scss";
import { Center, Flex, Input, Text } from "@chakra-ui/react";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) {
      alert("You need to type something");
      return;
    }

    navigate(`/search?q=${search}`);
    setSearch(search);
  };
  return (
    <Center id="navbar" p={5} position="fixed" bgColor="blue.900" w="100%" h="10dvh">
      <Flex mr={5}>
        <h2>
          <Link to="/" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
            <BiCameraMovie fontSize={30} color="#fff"/> <Text fontSize={20}>MovieVerse</Text>
          </Link>
        </h2>
      </Flex>
      <form onSubmit={handleSubmit} className="nav-form" style={{display: "flex"}}>
        <Input
          type="text"
          placeholder="Search the movies"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit" style={{marginLeft: "10px"}}>
          <BiSearchAlt2 fontSize={30} color="#fff"/>
        </button>
      </form>

      <Link to="/favorites">Favorites</Link>
    </Center>
  );
};

export default NavBar;
