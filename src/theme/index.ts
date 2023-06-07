import { extendTheme, type ThemeConfig } from "@chakra-ui/react"

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
}

const colors = {
  brand: {
    primary: "#151515",
    primaryLight: "#F2F2F2",
    secondary: "#F2F2F2",
    secondaryLight: "#151515",
    accent: "#303030",
    accentLight: "#E0E0E0",
    muted: "#BDBDBD",
    mutedLight: "#A0A0A0",
  },
}

export const theme = extendTheme({
  colors,
})
