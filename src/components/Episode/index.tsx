import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Divider, Link, List, ListItem, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { episode } from '../../interfaces/data'
import { RxExternalLink } from 'react-icons/rx'
import CharactersOnEpisode from '../CharactersOnEpisode'
import { useTranslation } from 'react-i18next'
interface EpisodeProps {
  episode : episode
}
export default function Episode({episode} : EpisodeProps) {
  const { t } = useTranslation()
  return (
    <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as="span" flex='1' textAlign='left'>
          {episode.name}
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <Center
    flexDir={'column'}
    alignItems={'start'}
    gap={4}>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                {t("aboutThisEpisode")}
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                <List spacing={2}>
                  <ListItem>{t("airDateDetail")}: {episode.air_date}</ListItem>
                  <ListItem>{t("episodeCodeDetail")}: {episode.episode}</ListItem>{' '}
                  <ListItem>{t("linkDetail")}: <Link href={episode.url} isExternal>
  {episode.url} <RxExternalLink mx='2px' />
</Link></ListItem>
                </List>
              </SimpleGrid>
              <Divider />
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                  {t("onThisEpisode")}
              </Text>
              <CharactersOnEpisode characters={episode.characters}/>
            </Center>
    </AccordionPanel>
  </AccordionItem>
  )
}
