export const getBgColorValue = (id: number) => {
  let value : string = ''
  switch(true){
    case id < 50 :
      value =  'brand.lightBG'
    break
    case id > 50 && id < 80:
      value = 'brand.blueBG'
      break
    case id > 80:
      value = 'brand.redBG'
  }
  return value
}