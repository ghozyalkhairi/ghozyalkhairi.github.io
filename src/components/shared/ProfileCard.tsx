import { Box, Text, useColorMode, Link } from "@chakra-ui/react";
import { Image } from "@chakra-ui/next-js";
import { FC } from "react";
import ProfilePhoto from "@/assets/png/foto.png";
import GitHubIcon from "@/assets/icons/GitHubIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";

const ProfileCard: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="flex-start"
    >
      <Box
        w="100%"
        justifyContent="flex-start"
        display={{
          base: "flex",
          md: "none",
        }}
      >
        <Image
          src={ProfilePhoto}
          alt="Profile Photo"
          width={160}
          height={160}
        />
      </Box>
      <Box
        w="100%"
        justifyContent="flex-start"
        display={{
          base: "none",
          md: "flex",
        }}
      >
        <Image
          src={ProfilePhoto}
          alt="Profile Photo"
          width={240}
          height={240}
        />
      </Box>
      <Text fontSize="3xl" fontWeight="bold" mt="4">
        Ghozy Alkhairi
      </Text>
      <Text
        fontSize="xl"
        fontWeight="light"
        mt="2"
        color={colorMode === "light" ? "brand.mutedLight" : "brand.muted"}
      >
        Web & Mobile Developer
      </Text>
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        w="100%"
        gap="8"
        mt="8"
      >
        <Link href="https://github.com/ghozyalkhairi" isExternal>
          <GitHubIcon
            fill={colorMode === "light" ? "#151515" : "#F2F2F2"}
            height="30"
            width="30"
          />
        </Link>
        <Link
          href="https://www.linkedin.com/in/muhammad-ghozy-alkhairi/"
          isExternal
        >
          <LinkedInIcon
            fill={colorMode === "light" ? "#151515" : "#F2F2F2"}
            height="30"
            width="30"
          />
        </Link>
        <Link href="https://www.instagram.com/ghozyalkhairi/" isExternal>
          <InstagramIcon
            fill={colorMode === "light" ? "#151515" : "#F2F2F2"}
            height="30"
            width="30"
          />
        </Link>
      </Box>
    </Box>
  );
};

export default ProfileCard;
