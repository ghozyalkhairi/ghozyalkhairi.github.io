import LinkIcon from "@/assets/icons/LinkIcon"
import { Image } from "@chakra-ui/next-js"
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
  image: string
}

const ProjectCardItem: FC<Props> = ({ name, description, github, image }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      bg={colorMode === "light" ? "brand.accentLight" : "brand.accent"}
      w="100%"
      minH={{
        base: "320px",
        md: "400px",
      }}
      borderRadius="lg"
      boxShadow="lg"
      p="4"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      position="relative"
    >
      <Image
        src={image}
        alt={name}
        fill
        style={{
          objectFit: "cover",
          filter: "brightness(0.7)",
        }}
      />
      <Box
        position="absolute"
        bottom="0"
        left="0"
        w="100%"
        h="100%"
        p="4"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        color="transparent"
        transition="all 0.2s ease-in-out"
        _hover={{
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.7)",
        }}
      >
        <Text color="brand.muted" fontSize="xl" fontWeight="bold">
          {name}
        </Text>
        <Text color="brand.muted" fontSize="md" mt="4">
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
    </Box>
  )
}

export default ProjectCardItem
