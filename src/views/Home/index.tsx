import { Center } from '@chakra-ui/react'
import Header from '../../components/Header'
import SearchBar from '../../components/SearchBar'
import { useAppSelector } from '../../store/hooks'
import { RootState } from '../../store'
import Nav from '../../components/Nav'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'

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
        >
      <Center
      flexDir={'column'}
      gap={5}
      p={10}>
      <Nav />
      <Header />
      {location.pathname === '/' && <SearchBar />}
      <Outlet />
      </Center>
      <Footer />
    </Center>
  )
}