import { FC } from "react"
import { Box, Text, useColorMode, Link } from "@chakra-ui/react"
import { Image } from "@chakra-ui/next-js"

interface Props {
  name: string
  url: string
  image: string
}

const CertificationItem: FC<Props> = ({ name, url, image }) => {
  const { colorMode } = useColorMode()
  return (
    <Link href={url} isExternal w="100%">
      <Box
        w="100%"
        h="240px"
        display="flex"
        flexDir="column"
        justifyContent="center"
        alignItems="flex-start"
        position="relative"
        bg="brand.secondary"
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
          display="flex"
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          color="transparent"
          transition="all 0.2s ease-in-out"
          _hover={{
            color: "white",
            cursor: "pointer",
            backgroundColor: "rgba(0, 0, 0, 0.7)",
          }}
        >
          <Text fontSize="xl" fontWeight="semibold" px="2">
            {name}
          </Text>
        </Box>
      </Box>
    </Link>
  )
}

export default CertificationItem
