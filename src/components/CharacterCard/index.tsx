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
  Spinner,
} from "@chakra-ui/react";
import FavoriteButton from "../FavoriteButton";
import CharacterDetail from "../CharacterDetail";
import { useTranslation } from "react-i18next";
interface CharacterCardProps {
  character: character;
}
export default function CharacterCard({ character }: CharacterCardProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { t } = useTranslation()
  return (
    <Center py={12}>
      <CharacterDetail isOpen={isOpen} onOpen={onOpen} onClose={onClose} character={character} />
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
        <Center
        justifyContent={'center'}
        flexDir={'row'}
        w={'full'}>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            {t("specieDetail")}:
            <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
              {character.species}
            </Badge>
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {character.name}
          </Heading>
        </Stack>
        </Center>
        <FavoriteButton character={character} />
      </Box>
    </Center>
  );
}
