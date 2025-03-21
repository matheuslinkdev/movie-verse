import { FaStar } from "react-icons/fa";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import {
  ButtonGroup,
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./style.scss";
import { useFavoriteContext } from "../../Context/favoritesContext";

const imageUrl = import.meta.env.VITE_IMG;

const MovieCard = ({ movie }) => {
  const { favorites, addMovieToFavorites, removeMovieFromFavorites } =
    useFavoriteContext();

  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeMovieFromFavorites(movie.id);
    } else {
      addMovieToFavorites(movie);
    }
  };

  const roundedAverage = parseFloat(movie.vote_average).toFixed(1);

  return (
    <Flex maxW="95dvw">
      <Flex
        alignItems="center"
        justifyContent="space-between"
        p={2}
        position="relative"
        bg="commons.900"
        _hover={{ bg: "commons.950", transition: ".3s" }}
        w="430px"
        maxW="95dvw"
        h={200}
        borderRadius="5px"
      >
        <Box>
          <Image
            src={imageUrl + movie.poster_path}
            alt={movie.title}
            borderRadius={5}
            h="180px"
            minW="130px"
            transition="ease-in-out .4s"
            _hover={{ transform: "scale(1.2)" }}
          />
        </Box>

        <Box ml={5} textAlign="start" w="60%">
          <Heading
            size="md"
            color="commons.100"
            fontWeight={400}
            position="absolute"
            top={5}
          >
            {movie.title}
          </Heading>
          <Text
            color="blue.600"
            fontSize="xl"
            display="flex"
            alignItems="center"
            w="60px"
            justifyContent="space-between"
            position="absolute"
            bottom={12}
          >
            <FaStar /> {roundedAverage}
          </Text>

          <ButtonGroup spacing="2" position="absolute" bottom={5}>
            <Link to={`/details/${movie.id}`}>
              <Text
                color="blue.200"
                textDecor="underline"
                _hover={{ color: "blue.400" }}
                transition=".2s linear"
              >
                Details
              </Text>
            </Link>

            <Icon
              onClick={handleToggleFavorite}
              _hover={{
                cursor: "pointer",
                color: "blue.400",
                filter: "drop-shadow(0 0 2px var(--chakra-colors-blue-400))",
              }}
              transition=".3s ease-in-out"
              as={isFavorite ? IoMdHeart : IoMdHeartEmpty}
              color="blue.600"
              marginLeft={2}
              fontSize={24}
            />
          </ButtonGroup>
        </Box>
      </Flex>
    </Flex>
  );
};

// Definindo propTypes para o componente MovieCard
MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  showLink: PropTypes.bool,
  addToFavorites: PropTypes.func.isRequired,
};

export default MovieCard;
