import { Box, Text, useColorMode } from "@chakra-ui/react"
import { FC } from "react"

const AboutMe: FC = () => {
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
        ABOUT
      </Text>
      <Text fontSize="lg" my="2">
        I'm Ghozy, an enthusiastic Informatics Engineering college student
        hailing from Indonesia. As an aspiring web and mobile developer, I have
        been exploring the fascinating world of coding since 2021. My primary
        focus lies in leveraging the power of React.js and React Native to
        create innovative and user-friendly applications.
      </Text>
      <Text fontSize="lg" my="2">
        I take immense pleasure in crafting seamless user interfaces that
        enhance the overall user experience. With a keen eye for design, I aim
        to develop applications that not only function flawlessly but also
        captivate users with their aesthetics.
      </Text>
      <Text fontSize="lg" my="2">
        Beyond the realm of coding, you'll find me dedicating my time to another
        passion: weightlifting at the gym. This pursuit not only helps me
        maintain a healthy and balanced lifestyle but also nurtures my
        determination and discipline, which seamlessly translates into my work
        as a developer.
      </Text>
      <Text fontSize="lg" my="2">
        With a strong foundation in Informatics Engineering and a burning desire
        to grow in the field, I am constantly seeking opportunities to broaden
        my horizons and collaborate on exciting projects. Together, let's build
        exceptional experiences through cutting-edge technology.
      </Text>
    </Box>
  )
}

export default AboutMe
