import { Box } from "@chakra-ui/react"
import { FC } from "react"
import ProjectCardItem from "./ProjectCardItem"
import projects from "../../data/projects.json"

const FeaturedProjectList: FC = () => {
  return (
    <Box
      w="100%"
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="flex-start"
      gap="4"
      mt="4"
    >
      {projects.map((project) => (
        <ProjectCardItem key={project.id} {...project} />
      ))}
    </Box>
  )
}

export default FeaturedProjectList
