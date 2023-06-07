import { FC, PropsWithChildren } from "react"
import { Box, useColorMode } from "@chakra-ui/react"
import MobileNav from "./MobileNav"
import Footer from "./Footer"

const BaseLayout: FC<PropsWithChildren> = ({ children }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === "light" ? "brand.primaryLight" : "brand.primary"}
      minH="100vh"
      w="100%"
    >
      <Box
        h="100%"
        w="100%"
        color={
          colorMode === "light" ? "brand.secondaryLight" : "brand.secondary"
        }
        p="4"
      >
        <MobileNav />
        {children}
        <Footer />
      </Box>
    </Box>
  )
}

export default BaseLayout
