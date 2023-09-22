import useData from "../../hooks/useData"
import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, SimpleGrid } from "@chakra-ui/react"
import CharacterCard from "../CharacterCard"

export default function Favorites() {
  const { Favs } = useData()

  return (
    <Center
    gap={5}>
      <SimpleGrid columns={{base: 1, lg: 3}}  rowGap={'-20'} gap={10} justifyContent={'center'}>
      {Favs.map((character , index)=> (
        <CharacterCard key={index} character={character}/>
      ))}
      </SimpleGrid>
    </Center>
  )
}
