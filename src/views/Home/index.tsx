import { Center } from '@chakra-ui/react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'

export default function Home() {
  return (
    <Center
    p={10}
    justifyContent={'start'}
    flexDir={'column'}
    w={'full'}
    h={'calc(100vh)'}
    bgColor={'brand.blue'}>
      <Center
      flexDir={'column'}
      gap={5}>
      <Header />
      <SearchBar />
      </Center>
    </Center>
  )
}
