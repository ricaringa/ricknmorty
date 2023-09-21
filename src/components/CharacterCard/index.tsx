import { character } from "../../interfaces/data";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
  Badge,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import Episodes from "../Episodes";
interface CharacterCardProps {
  character: character;
}
export default function CharacterCard({ character }: CharacterCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center py={12}>
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
              fallback={<Spinner />}
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
      <Box
        role={"group"}
        p={6}
        maxW={"330px"}
        w={"full"}
        bg={useColorModeValue("brand.gray", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${character.image})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _hover={{
            cursor: "pointer",
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
          onClick={onOpen}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src={character.image}
            fallback={<Spinner />}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Specie:
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              {character.species}
            </Badge>
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {character.name}
          </Heading>
        </Stack>
      </Box>
    </Center>
  );
}
