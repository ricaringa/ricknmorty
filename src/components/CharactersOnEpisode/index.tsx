import { useEffect, useState } from "react";
import { character } from "../../interfaces/data"
import { getCharactersOnEpisode } from "../../utils/fetchData";
import { Avatar, AvatarGroup } from "@chakra-ui/react";

interface CharactersOnEpisodeProps {
  characters : string[]
}
export default function CharactersOnEpisode({ characters } : CharactersOnEpisodeProps) {
  const [onThisEpisode, setOnThisEpisode] = useState<Array<character>>([]);
  useEffect(() => {
    getCharactersOnEpisode(characters).then((data) => {
      setOnThisEpisode(data);
    });
  }, []);
  return (
    <AvatarGroup size='md' max={6} w={'full'}>
      {onThisEpisode.map((characterOnEpisode)=> (
        <Avatar name={characterOnEpisode.name} src={characterOnEpisode.image} />
      ))}
</AvatarGroup>
  )
}
