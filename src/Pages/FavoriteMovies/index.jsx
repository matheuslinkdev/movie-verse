import { Center, Text } from "@chakra-ui/react";
import { useFavoriteContext } from "../../Context/favoritesContext";
import MovieCard from "../../Components/MovieCard";
import Return from "../../Components/Return";

const FavoritesScreen = () => {
  const { favorites } = useFavoriteContext();

  console.log(favorites)

  return (
  <>
  <Return destinyRoute="/"/>
    {favorites.length !== 0 ? <Center>
        {favorites.map((movie, index)=>{
            return (
              <MovieCard movie={movie} key={index}/>
            );
        })}
    </Center> : (
        <Text>No movies added yet</Text>
    )}
  </>)
};

export default FavoritesScreen;
