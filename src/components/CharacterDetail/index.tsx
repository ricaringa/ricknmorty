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
import { useTranslation } from 'react-i18next'

interface CharacterDetailProps{
  isOpen: boolean,
  onOpen: () => void,
  onClose: () => void,
  character: character
}
export default function CharacterDetail({ isOpen, onClose, character} : CharacterDetailProps) {
  const { t } = useTranslation()
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={{ base: "90vw" }}>
          <ModalHeader>{t("characterLabel")}: {character.name}</ModalHeader>
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
                {t("specieDetail")}:
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
                  {t("statusDetail")}: {character.status}
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  whiteSpace={"initial"}
                  display={"flex"}
                >
                  {t("originDetail")}: {character.origin.name}
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  whiteSpace={"initial"}
                  display={"flex"}
                >
                  {t("locationDetail")}: {character.location.name}
                </Badge>
                <Badge
                  px={2}
                  py={1}
                  bg={useColorModeValue("gray.50", "gray.800")}
                  fontWeight={"400"}
                  whiteSpace={"initial"}
                  display={"flex"}
                >
                  {t("genderDetail")}: {character.gender}
                </Badge>
              </SimpleGrid>
              <Episodes data={character.episode}/>
            </Stack>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              {t("close")}
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
  )
}
