import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { episode } from "../../interfaces/data";
import { useEffect, useState } from "react";
import Episode from "../Episode";
import { getEpisodes } from "../../utils/fetchData";
import { useTranslation } from "react-i18next";
interface EpisodesProps {
  data: string[];
}
export default function Episodes({ data }: EpisodesProps) {
  const { t } = useTranslation()
  const [episodes, setEpisodes] = useState<Array<episode>>([]);
  useEffect(() => {
    getEpisodes(data).then((data) => {
      setEpisodes(data);
    });
  }, []);
  return (
    <Accordion w={"full"} allowToggle>
      <AccordionItem>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left">
              {t("episodesDetail")}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Accordion w={'full'} allowToggle>
            {episodes.map((ep, index) => (
              <Episode key={index} episode={ep} />
            ))}
          </Accordion>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
