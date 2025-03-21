import { Center, Text } from "@chakra-ui/react";
import { useFavoriteContext } from "../../Context/favoritesContext";
import MovieCard from "../../Components/MovieCard";
import Return from "../../Components/Return";

const FavoritesScreen = () => {
  const { favorites } = useFavoriteContext();

  return (
    <>
      <Return destinyRoute="/" />
      {favorites ? (
        <Center>
          <Center
            w="100dvw"
            display="flex"
            flexWrap="wrap"
            gap="10px 5px"
            justifyContent="space-evenly"
            mt={20}
            mb={5}
          >
            {favorites.map((movie, index) => {
              return <MovieCard movie={movie} key={index} />;
            })}
          </Center>
        </Center>
      ) : (
        <Text>No movies added yet</Text>
      )}
    </>
  );
};

export default FavoritesScreen;
