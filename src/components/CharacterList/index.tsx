import useData from "../../hooks/useData"
import { Alert, AlertDescription, AlertIcon, Center, SimpleGrid, Spinner } from "@chakra-ui/react"
import CharacterCard from "../CharacterCard"
import { useTranslation } from "react-i18next"

export default function CharacterList() {
  const { Loading, Characters, HaveResidents } = useData()
  const { t } = useTranslation()
  return Loading ? <Spinner size={'md'} color={'brand.blue'} /> : (
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
  <AlertDescription>{t("noResidentsMessage")} 😩</AlertDescription>
</Alert>}
      
    </Center>
  )
}
