import { FC } from "react";
import { Box, Text, useColorMode, Grid, GridItem } from "@chakra-ui/react";
import certifications from "@/data/certs.json";
import CertificationItem from "./CertificationItem";

const CertificationList: FC = () => {
  const { colorMode } = useColorMode();
  const reversed = [...certifications].reverse();
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
      <Grid
        templateColumns={{
          base: "repeat(1, 1fr)",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(4, 1fr)",
        }}
        gap={4}
        mt="4"
        w="100%"
      >
        {reversed.map((cert) => (
          <GridItem key={cert.name}>
            <CertificationItem
              name={cert.name}
              url={cert.url}
              image={cert.image}
            />
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default CertificationList;
