import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Stack,
  Text,
  Badge,
  Spinner,
  Heading,
  SimpleGrid,
  useColorModeValue,
  Button
} from '@chakra-ui/react'
import { character } from '../../interfaces/data'
import Episodes from '../Episodes'

interface CharacterDetailProps{
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  character: character
}
export default function CharacterDetail({ isOpen, onOpen, onClose, character} : CharacterDetailProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={{ base: "90vw" }}>
          <ModalHeader>{character.name}'s info</ModalHeader>
          <ModalCloseButton />
          <ModalBody justifyContent={"center"}>
            <Image
              rounded={"lg"}
              height={230}
              // width={282}
              w={"full"}
              objectFit={"cover"}
              src={character.image}
              alt="#"
              fallback={<Spinner mt={'20vh'} />}
            />
            <Stack pt={10} align={"center"}>
              <Text
                color={"gray.500"}
                fontSize={"sm"}
                textTransform={"uppercase"}
              >
                Specie:
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  {character.species}
                </Badge>
              </Text>
              <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                {character.name}
              </Heading>
              <SimpleGrid mt={6} columns={2} gap={2}>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                >
                  Status: {character.status}
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  whiteSpace={"initial"}
                  display={"flex"}
                >
                  Origin: {character.origin.name}
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  whiteSpace={"initial"}
                  display={"flex"}
                >
                  Location: {character.location.name}
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  whiteSpace={"initial"}
                  display={"flex"}
                >
                  Gender: {character.gender}
                </Badge>
              </SimpleGrid>
              <Episodes data={character.episode}/>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}
