import { Box, Text, useColorMode } from "@chakra-ui/react"
import { FC } from "react"
import FeaturedProjectList from "./FeaturedProjectList"

const FeaturedProjects: FC = () => {
  const { colorMode } = useColorMode()
  return (
    <Box
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="flex-start"
      mt="12"
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        color={colorMode === "light" ? "brand.mutedLight" : "brand.muted"}
      >
        FEATURED PROJECTS
      </Text>
      <FeaturedProjectList />
    </Box>
  )
}

export default FeaturedProjects
