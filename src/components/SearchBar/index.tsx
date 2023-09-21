import { IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
import useSearchBar from "../../hooks/useSearchBar";
export default function SearchBar() {
  const { handleInputChange, handleSearchButtonClick } = useSearchBar()
  return (
    <InputGroup w={{base: '85vw', sm: '', md: '', lg: 'calc(35vw)'}}>
    <Input placeholder='Search by Location ID' type="number" color={'brand.gray'} onChange={(e)=> {handleInputChange(e)}} />
    <InputRightElement>
    <IconButton aria-label='Search by Location ID' variant={'ghost'} title="Search" icon={<BsSearch />} onClick={()=>{handleSearchButtonClick()}} />
    </InputRightElement>
  </InputGroup>
  )
}
