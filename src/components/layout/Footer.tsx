import { FC } from "react"
import { Box, Text, useColorMode } from "@chakra-ui/react"

const Footer: FC = () => {
  const { colorMode } = useColorMode()
  return (
    <Box w="100%" mt="8">
      <Text
        textAlign="center"
        fontSize="sm"
        color={colorMode === "light" ? "brand.secondaryLight" : "brand.muted"}
      >
        Designed in Figma and coded in Visual Studio Code. Built with Next.js
        and ChakraUI.
      </Text>
    </Box>
  )
}

export default Footer
