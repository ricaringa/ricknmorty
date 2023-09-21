import { Center } from '@chakra-ui/react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import CharacterList from '../../components/CharacterList'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store'

export default function Home() {
  const { BG } = useAppSelector((state: RootState)=>state.data)
  return (
    <Center
    p={10}
    justifyContent={'center'}
    flexDir={'column'}
    w={'full'}
    minH={'calc(100vh)'}
    h={'-webkit-max-content'}
    fontFamily={'Urbanist'}
    bgColor={BG}
    >
      <Center
      flexDir={'column'}
      gap={5} px={10}>
      <Header />
      <SearchBar />
      <CharacterList />
      </Center>
    </Center>
  )
}
