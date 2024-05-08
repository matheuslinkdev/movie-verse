import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";

import Return from "../../Components/Return";
import { Grid, Flex, Heading, Image, Text, Center } from "@chakra-ui/react";

const moviesURL = import.meta.env.VITE_API;
const ApiKey = import.meta.env.VITE_API_KEY;

const MovieDetails = () => {
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
  }, []);

  const formatValue = (value) => {
    return value.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };
  

  const imageUrl = import.meta.env.VITE_IMG;

  return (
    <>
    <Center minHeight="100dvh">

      <Return destinyRoute="/" />
      {movie && (
        <Grid
          width="650px"
          maxWidth="95dvw"
          margin="auto"
          bg="commons.900"
          borderRadius="10px"
          padding="20px"
          boxSizing="border-box"
          textAlign="center"
        >
          <Image
            src={imageUrl + movie.backdrop_path}
            w="80%"
            h="auto"
            borderRadius="10px"
            mb={4}
            margin="auto"
          />
          <Heading fontSize="lg" fontWeight={500} color="yellow.600">
            {movie.tagline}
          </Heading>
          <Text fontSize="lg" fontWeight={300} mt={2} mb={4}>
            {movie.overview}
          </Text>
          <Flex
            mt={4}
            display="flex"
            flexWrap="wrap"
            gap={3}
            justifyContent="space-between"
          >
            <Flex flexDirection="column" alignItems="center" margin="auto">
              <BsWallet2 size={30} color="yellow.600" />
              <Heading fontSize="md" fontWeight={500} color="yellow.600">
                Budget:
              </Heading>
              <Text mt={1}>{formatValue(movie.budget)}</Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center" margin="auto">
              <BsGraphUp size={30} color="yellow.600" />
              <Heading fontSize="md" fontWeight={500} color="yellow.600">
                Revenue:
              </Heading>
              <Text mt={1}>{formatValue(movie.revenue)}</Text>
            </Flex>
            <Flex flexDirection="column" alignItems="center" margin="auto">
              <BsHourglassSplit size={30} color="yellow.600" />
              <Heading fontSize="md" fontWeight={500} color="yellow.600">
                Time:
              </Heading>
              <Text mt={1}>{movie.runtime} minutes</Text>
            </Flex>
          </Flex>
        </Grid>
      )}
    </Center>
    </>
  );
};

export default MovieDetails;
