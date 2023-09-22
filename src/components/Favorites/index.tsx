import useData from "../../hooks/useData"
import { Alert, AlertDescription, AlertIcon, Center, SimpleGrid } from "@chakra-ui/react"
import CharacterCard from "../CharacterCard"
import { useTranslation } from "react-i18next"

export default function Favorites() {
  const { Favs } = useData()
  const { t } = useTranslation()
  return (
    <Center
    gap={5}>
      {Favs.length > 0 ? (
        <SimpleGrid columns={{base: 1, lg: 3}} rowGap={'-20'} gap={10}>
      {Favs.map((character , index)=> (
        <CharacterCard key={index} character={character}/>
      ))}
      </SimpleGrid>
      ) : 
      <Alert status='error' rounded={'lg'}>
  <AlertIcon />
  <AlertDescription>{t("noFavsMessage")}</AlertDescription>
</Alert>}
      
    </Center>
  )
}
