import { FC } from "react"
import { Box, Text, useColorMode } from "@chakra-ui/react"
import certifications from "@/data/certs.json"
import CertificationItem from "./CertificationItem"

const CertificationList: FC = () => {
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
        CERTIFICATIONS
      </Text>
      <Box
        display="flex"
        flexDir={{
          base: "column",
          md: "row",
        }}
        justifyContent="flex-start"
        alignItems="center"
        w="100%"
        gap="8"
        mt="8"
      >
        {certifications.map((cert) => (
          <CertificationItem
            key={cert.name}
            name={cert.name}
            url={cert.url}
            image={cert.image}
          />
        ))}
      </Box>
    </Box>
  )
}

export default CertificationList
