import { extendTheme } from "@chakra-ui/react"

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      blue: "#2F4368",
      yellow: "#FAF76B",
      brown: "#87501F",
      beige: "#F7C49D",
      gray: "#EAEAEA",
      green: "#97ce4c",
      lightBG: "#60a85f",
      redBG: "#ff6666",
      blueBG: "#144169"
    },
  },
})