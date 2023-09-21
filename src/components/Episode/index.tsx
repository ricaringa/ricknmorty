import { AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Center, Divider, Link, List, ListItem, SimpleGrid, Text, useColorModeValue } from '@chakra-ui/react'
import { episode } from '../../interfaces/data'
import { RxExternalLink } from 'react-icons/rx'
import CharactersOnEpisode from '../CharactersOnEpisode'
interface EpisodeProps {
  episode : episode
}
export default function Episode({episode} : EpisodeProps) {
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
                about this episode
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5}>
                <List spacing={2}>
                  <ListItem>Air date: {episode.air_date}</ListItem>
                  <ListItem>Episode code: {episode.episode}</ListItem>{' '}
                  <ListItem>Link: <Link href={episode.url} isExternal>
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
               on this episode
              </Text>
              <CharactersOnEpisode characters={episode.characters}/>
            </Center>
    </AccordionPanel>
  </AccordionItem>
  )
}
