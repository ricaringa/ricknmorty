import { Button, Center, Image, useColorMode } from "@chakra-ui/react";
import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs'
export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <Center gap={2}>
      <Image src={'src/assets/portal.png'} w={{base: 'calc(35vw)', sm: 'calc(25vw)', md: 'calc(20vw)', lg: 'calc(10vw)'}} />
      <Image src={'src/assets/logo.png'} w={{base: 'calc(50vw)', md: 'calc(40vw)', lg: '15vw'}}/>
      <Button onClick={toggleColorMode} variant={'solid'} position={'fixed'} zIndex={1000} left={5} top={2} size={'sm'}>
                {colorMode === 'light' ? <BsLightbulbOff /> : <BsLightbulb />}
              </Button>
    </Center>
  )
}