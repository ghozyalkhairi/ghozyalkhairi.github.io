import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useColorMode,
  Box,
  Divider,
} from "@chakra-ui/react"
import { FC } from "react"
import { Link } from "@chakra-ui/next-js"

interface Props {
  isOpen: boolean
  onClose: () => void
}

const NavDrawer: FC<Props> = ({ isOpen, onClose }) => {
  const { colorMode } = useColorMode()
  return (
    <Drawer isOpen={isOpen} placement="left" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent
        bg={colorMode === "light" ? "brand.primaryLight" : "brand.primary"}
        color={
          colorMode === "light" ? "brand.secondaryLight" : "brand.secondary"
        }
      >
        <DrawerCloseButton />
        <DrawerHeader>
          <Text fontSize="2xl" fontWeight="bold">
            Menu
          </Text>
        </DrawerHeader>

        <DrawerBody>
          <Box
            display="flex"
            justifyContent="flex-start"
            alignItems="flex-start"
            flexDir="column"
            w="100%"
            h="100%"
            gap="2"
          >
            <Link href="/" onClick={onClose} w="100%">
              <Text fontSize="lg" mb="4">
                Home
              </Text>
              <Divider w="100%" />
            </Link>
            <Link href="/certification" onClick={onClose} w="100%">
              <Text fontSize="lg" mb="4">
                Certifications
              </Text>
              <Divider w="100%" />
            </Link>
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer
