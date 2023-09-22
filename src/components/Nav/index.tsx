import { Button, Center, Select, useColorMode } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { AiFillHeart, AiFillHome } from 'react-icons/ai'

import { BsLightbulbOff, BsLightbulb } from 'react-icons/bs'
import { Link, useLocation } from 'react-router-dom'
import { LANGUAGES } from '../../constants'
import i18n from '../../i18n'

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode()
  const location = useLocation()
  const areWeHome = location.pathname === '/'
  const { t } = useTranslation()
  const onChangeLang = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang_code = e.target.value;
    i18n.changeLanguage(lang_code);
  };
  return (
    <Center gap={2}>
      <Button onClick={toggleColorMode} variant={'solid'} size={'sm'}>
                {colorMode === 'light' ? <BsLightbulbOff /> : <BsLightbulb />}
              </Button>

              <Button as={Link} to={areWeHome ? '/favorites' : '/'} leftIcon={areWeHome ? <AiFillHeart /> : <AiFillHome /> } color={areWeHome ? 'red.400' : 'brand.green'} variant='solid' size={'sm'}>
    {areWeHome ? t("favButtonNavLabel") : t("homeButtonNavLabel")}
  </Button>
  <Select size={'sm'} w={{base: '25vw', sm: '10vw', xl: '6vw'}} defaultValue={'es'} onChange={onChangeLang}>
      {LANGUAGES.map(({ code, label }) => (
        <option key={code} value={code}>
            {label}
          </option>
        ))}
</Select>
    </Center>
  )
}
