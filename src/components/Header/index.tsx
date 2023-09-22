import { Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
export default function Header() {
  
  return (
    <Center gap={2}
    as={Link}
    to={'/'}>
      <Image src={`${import.meta.env.VITE_PATH_TO_ASSETS}portal.png`} w={{base: 'calc(35vw)', sm: 'calc(25vw)', md: 'calc(20vw)', lg: 'calc(10vw)'}} />
      <Image src={`${import.meta.env.VITE_PATH_TO_ASSETS}logo.png`} w={{base: 'calc(50vw)', md: 'calc(40vw)', lg: '15vw'}}/>
    </Center>
  )
}