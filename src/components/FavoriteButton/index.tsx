import { IconButton } from '@chakra-ui/react'
import { character } from '../../interfaces/data'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import useFavorites from '../../hooks/useFavorites'
interface FavoriteButtonProps {
  character: character;
}
export default function FavoriteButton( { character }: FavoriteButtonProps) {
  const { isFavorite, addToFavorites, removeFromFavorites } = useFavorites()
  const isFav = isFavorite(character)
  return isFav ? <IconButton aria-label='Favs' variant={'ghost'} icon={<AiFillHeart/>} color={'red.400'}  onClick={()=>{removeFromFavorites(character)}}/> : <IconButton aria-label='Favs' variant={'ghost'} icon={<AiOutlineHeart />} onClick={()=>{addToFavorites(character)}}/>
}
  

