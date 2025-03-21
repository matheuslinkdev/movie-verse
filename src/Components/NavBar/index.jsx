import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import "./style.scss";
import { Box, Center, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import Return from "../Return";
import { IoHeart } from "react-icons/io5";

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
    <Center
      display="flex"
      justifyContent="space-between"
      p={5}
      position="absolute"
      top={0}
      bgColor="blue.900"
      w="100%"
      h="10dvh"
    >
      <Box>
        <Return destinyRoute="/" />
      </Box>
      <Flex alignItems="center">
        <Link
          to="/"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BiCameraMovie fontSize={30} color="#fff" />{" "}
          <Text fontSize={20}>MovieVerse</Text>
        </Link>
        <FormControl ml={5}>
          <form
            onSubmit={handleSubmit}
            className="nav-form"
            style={{ display: "flex" }}
          >
            <Input
              type="text"
              placeholder="Search the movies"
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              color="#fff"
            />
            <button type="submit" style={{ marginLeft: "10px" }}>
              <BiSearchAlt2 fontSize={30} color="#fff" />
            </button>
          </form>
        </FormControl>
      </Flex>

      <Link to="/favorites">
        <Box
          display="flex"
          alignItems="center"
          color="blue.500"
          _hover={{ color: "blue.400" }}
        >
          <Text>Favorites</Text>
          <IoHeart fontSize={22} />
        </Box>
      </Link>
    </Center>
  );
};

export default NavBar;
