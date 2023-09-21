import useData from "../../hooks/useData"
import { Alert, AlertDescription, AlertIcon, AlertTitle, Center, SimpleGrid } from "@chakra-ui/react"
import CharacterCard from "../CharacterCard"

export default function CharacterList() {
  const { Characters, HaveResidents } = useData()

  return (
    <Center
    gap={5}>
      {HaveResidents ? (
        <SimpleGrid columns={{base: 1, lg: 3}} rowGap={'-20'} gap={10}>
      {Characters.map((character , index)=> (
        <CharacterCard key={index} character={character}/>
      ))}
      </SimpleGrid>
      ) : 
      <Alert status='error' rounded={'lg'}>
  <AlertIcon />
  <AlertTitle>Oh no</AlertTitle>
  <AlertDescription>This location has no residents :c</AlertDescription>
</Alert>}
      
    </Center>
  )
}
