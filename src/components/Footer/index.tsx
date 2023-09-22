import {
  Center,
  Text,
  chakra,
  useColorModeValue,
  Container,
  Stack,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { AiFillGithub } from "react-icons/ai";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <Center
      bottom={0}
      w={"full"}
      p={5}
      position={"absolute"}
      justifyContent={"center"}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Text fontWeight={"medium"} display={"inline-block"}>
          2023 &copy; {t("footer")} 🫀
        </Text>
        <Stack direction={"row"} spacing={6}>
          <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={"https://github.com/ricaringa/ricknmorty"}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
              bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
            }}
          >
            <VisuallyHidden>GitHub</VisuallyHidden>
            <AiFillGithub />
          </chakra.button>
        </Stack>
      </Container>
    </Center>
  );
}
