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
    justifyContent={'center'}
    flexDir={'column'}
    w={'calc(100vw)'}
    minH={'calc(100vh)'}
    fontFamily={'Urbanist'}
    bgColor={BG}
    py={10}
        >
      <Center
      flexDir={'column'}
      gap={5}
      h={'-webkit-fit-content'} 
      py={10}>
      <Nav />
      <Header />
      {location.pathname === '/' && <SearchBar />}
      <Outlet />
      </Center>
      <Footer />
    </Center>
  )
}