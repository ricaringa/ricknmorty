import { IconButton, Input, InputGroup, InputRightElement, styled } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
import useSearchBar from "../../hooks/useSearchBar";
export default function SearchBar() {
  const { handleInputChange, handleSearchButtonClick, handleKeyDown, input } = useSearchBar()
 
  return (
    <InputGroup w={{base: '85vw', sm: '', md: '', lg: 'calc(35vw)'}}>
    <Input placeholder='Search by Location ID' type="number" color={'brand.gray'} borderColor={'gray.600'} onChange={(e)=> {handleInputChange(e)}} onKeyDown={(e)=>{handleKeyDown(e)}} value={input} />
    <InputRightElement>
    <IconButton aria-label='Search by Location ID' variant={'ghost'} title="Search" icon={<BsSearch />} onClick={()=>{handleSearchButtonClick()}} />
    </InputRightElement>
  </InputGroup>
  )
}
