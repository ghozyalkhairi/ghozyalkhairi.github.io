import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  useColorMode,
} from "@chakra-ui/react"
import { FC } from "react"

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
        <DrawerHeader>Ghozy Alkhairi</DrawerHeader>

        <DrawerBody>
          <Text>Work In Progress</Text>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default NavDrawer
