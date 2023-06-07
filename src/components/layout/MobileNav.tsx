import BurgerIcon from "@/assets/icons/BurgerIcon"
import SunIcon from "@/assets/icons/SunIcon"
import MoonIcon from "@/assets/icons/MoonIcon"
import { Box, useDisclosure, useColorMode } from "@chakra-ui/react"
import NavDrawer from "./NavDrawer"

const MobileNav = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <NavDrawer isOpen={isOpen} onClose={onClose} />
      <Box
        w="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb="10"
      >
        <button
          onClick={onOpen}
          style={{
            cursor: "pointer",
          }}
        >
          <BurgerIcon
            fill={colorMode === "light" ? "#151515" : "#F2F2F2"}
            height="30"
            width="30"
          />
        </button>
        <Box
          bg={colorMode === "light" ? "brand.accentLight" : "brand.accent"}
          p="2"
          cursor="pointer"
          borderRadius="xl"
          onClick={toggleColorMode}
        >
          {colorMode === "light" ? (
            <MoonIcon fill="#151515" height="28" width="28" />
          ) : (
            <SunIcon fill="#F2F2F2" height="28" width="28" />
          )}
        </Box>
      </Box>
    </>
  )
}

export default MobileNav
