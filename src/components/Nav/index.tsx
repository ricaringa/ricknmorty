import { Button, Center, useColorMode } from '@chakra-ui/react'
import { AiFillHeart, AiFillHome } from 'react-icons/ai'

import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()
  const areWeHome = location.pathname === '/'
  return (
    <Center gap={2}>
      <Button onClick={toggleColorMode} variant={'solid'} size={'sm'}>
                {colorMode === 'light' ? <BsLightbulbOff /> : <BsLightbulb />}
              </Button>

              <Button as={Link} to={areWeHome ? '/favorites' : '/'} leftIcon={areWeHome ? <AiFillHeart /> : <AiFillHome /> } color={areWeHome ? 'red.400' : 'brand.green'} variant='solid' size={'sm'}>
    {areWeHome ? 'Favorites' : 'Home'}
  </Button>
    </Center>
  )
}
