import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
export default function SearchBar() {
  return (
    <InputGroup>
    <Input placeholder='Search by Location ID' />
    <InputRightElement>
    <IconButton aria-label='Search by Location ID' variant={'ghost'} title="Search" icon={<BsSearch />} />
    </InputRightElement>
  </InputGroup>
  )
}
