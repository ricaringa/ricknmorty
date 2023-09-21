import { Center, Image } from "@chakra-ui/react";

export default function Header() {
  return (
    <Center>
      <Image src={'src/assets/portal.png'} w={{base: 'calc(35vw)', sm: 'calc(25vw)', md: 'calc(10vw)', lg: 'calc(10vw)'}} />
      <Image src={'src/assets/logo.png'} w={{base: 'calc(50vw)', md: 'calc(30vw)', lg: 'calc(15vw)'}}/>
    </Center>
  )
}
