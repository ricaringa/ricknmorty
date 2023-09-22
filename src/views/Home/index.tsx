import { Center, Spinner } from '@chakra-ui/react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import CharacterList from '../../components/CharacterList'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store'
import Nav from '../../components/Nav'
import { Outlet, useLocation } from 'react-router-dom'

export default function Home() {
  const { BG } = useAppSelector((state: RootState)=>state.data)
  const location = useLocation() 
  return (
    <Center
    p={10}
    justifyContent={'center'}
    flexDir={'column'}
    w={'calc(100vw)'}
    minH={'calc(100vh)'}
    h={'-webkit-max-content'}
    fontFamily={'Urbanist'}
    bgColor={BG}
    overflowY="auto"
    css={{
      '&::-webkit-scrollbar': {
        width: '16px',
        borderRadius: '8px',
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      '&::-webkit-scrollbar-thumb': {
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
    }}
  
    >
      <Center
      flexDir={'column'}
      gap={5}>
      <Nav />
      <Header />
      {location.pathname === '/' && <SearchBar />}
      <Outlet />
      </Center>
    </Center>
  )
}