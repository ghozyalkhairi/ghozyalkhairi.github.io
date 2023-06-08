import LinkIcon from "@/assets/icons/LinkIcon"
import { Box, Text, useColorMode, Link } from "@chakra-ui/react"
import { FC } from "react"

interface Props {
  name: string
  description: string
  platform: string[]
  github: {
    platform: string
    url: string
  }[]
}

const ProjectCardItem: FC<Props> = ({
  name,
  description,
  platform,
  github,
}) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === "light" ? "brand.accentLight" : "brand.accent"}
      w="100%"
      h="100%"
      borderRadius="lg"
      boxShadow="lg"
      p="4"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
    >
      <Text
        color={colorMode === "light" ? "brand.secondaryLight" : "brand.muted"}
        fontSize="xl"
        fontWeight="bold"
      >
        {name}
      </Text>
      <Text
        color={colorMode === "light" ? "brand.secondaryLight" : "brand.muted"}
        fontSize="md"
        mt="4"
      >
        {description}
      </Text>
      <Box
        mt="4"
        w="100%"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
      >
        {github.map((item, index) => (
          <Link href={item.url} key={`${item}-${index}`} isExternal>
            <Box
              bg="brand.muted"
              borderRadius="lg"
              p="2"
              m="2"
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              gap="2"
            >
              <Text color="brand.accent" fontSize="md">
                {item.platform}
              </Text>
              <LinkIcon width="16" height="16" fill="#151515" />
            </Box>
          </Link>
        ))}
      </Box>
    </Box>
  )
}

export default ProjectCardItem
