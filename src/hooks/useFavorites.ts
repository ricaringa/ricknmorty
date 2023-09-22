import { actions as DataActions } from "../store/slices/Data/reducer";
import { useAppSelector } from "../store/hooks";
import { RootState, useAppDispatch } from "../store";
import { character } from "../interfaces/data";

export default function useFavorites() {
  const { Favs } = useAppSelector((state: RootState)=>state.data)

  const dispatch = useAppDispatch()
  const isFavorite = (character: character): boolean => {
    
    return Favs.some(fav => fav.id === character.id);
  }
 
  const addToFavorites = (character: character) => {
    const updatedFavs = [...Favs, character];
    console.log(updatedFavs)
    localStorage.setItem('FavCharacters', JSON.stringify(updatedFavs));
    dispatch(DataActions.updateFavs(updatedFavs))
  }
  
  const removeFromFavorites = (character: character) => {
    const oldFavs = JSON.parse(localStorage.getItem('FavCharacters') || '[]') as character[];
    const updatedFavs = oldFavs.filter(fav => fav.id !== character.id);
    localStorage.setItem('FavCharacters', JSON.stringify(updatedFavs));
    dispatch(DataActions.updateFavs(updatedFavs))
  }
  return {
    Favs,
    isFavorite,
    addToFavorites,
    removeFromFavorites
  };
}
