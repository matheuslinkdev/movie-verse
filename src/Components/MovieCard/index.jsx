import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

import "./style.scss";
import {
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import { useState } from "react";

const imageUrl = import.meta.env.VITE_IMG;
const MovieCard = ({ movie, showLink = true }) => {
  const [favorite, setFavorite] = useState(false);

  const handleAddFavorite = () => {
    if (!favorite) {
      setFavorite(true);
    } else {
      return alert("THIS MOVIE IS ALREADY IN TJHE FAVORITES LIST");
    }
    setFavorite(true);
    console.log(`Clicked: ${movie.title}`);
  };

  const roundedAverage = parseFloat(movie.vote_average).toFixed(1);
  const releaseYear = movie.release_date.substring(0, 4);

  console.log(movie);

  return (
    <Flex display="flex" maxW="95dvw">
      <Card
        maxW="sm"
        bg="commons.900"
        _hover={{ bg: "commons.950", transition: ".3s" }}
      >
        <CardBody>
          <Image
            src={imageUrl + movie.poster_path}
            alt={movie.title}
            borderRadius={15}
          />
          <Stack mt="6" spacing="3">
            <Heading size="md" color="commons.100" fontWeight={300}>
              {movie.title}
            </Heading>
            <Text color="blue.600" fontSize="2xl">
              <FaStar /> {roundedAverage}
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Link to={`/movie-verse/details/${movie.id}`}>
              <Button variant="solid" colorScheme="blue">
                Details
              </Button>
            </Link>
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => handleAddFavorite()}
            >
              Add to Favs{" "}
              <Icon
                as={favorite ? IoMdHeart : IoMdHeartEmpty}
                color="blue.600"
                marginLeft={2}
              />
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Flex>
  );
};

export default MovieCard;
