import { Alert, AlertIcon, Center, IconButton, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { BsSearch } from 'react-icons/bs'
import useSearchBar from "../../hooks/useSearchBar";
import { useTranslation } from "react-i18next";
export default function SearchBar() {
  const { handleInputChange, handleSearchButtonClick, handleKeyDown, input, showAlert } = useSearchBar()
  const { t } = useTranslation()
  return (
    <Center
    flexDir={'column'}
    gap={2}>
{showAlert === true && (
        <Alert status='info' size={'sm'} rounded={'lg'}>
        <AlertIcon />
        {t("invalidInputMessage")}
      </Alert>
      )}
    <InputGroup w={{base: '85vw', sm: '', md: '', lg: 'calc(35vw)'}}>
    <Input placeholder={t("inputPlaceholder")} type="number" color={'brand.gray'} borderColor={'gray.600'} onChange={(e)=> {handleInputChange(e)}} onKeyDown={(e)=>{handleKeyDown(e)}} value={input} />
    <InputRightElement>
    <IconButton aria-label='Search by Location ID' variant={'ghost'} title="Search" icon={<BsSearch />} onClick={()=>{handleSearchButtonClick()}} />
    </InputRightElement>
  </InputGroup>
    </Center>
  )
}
