import Head from "next/head";
import BaseLayout from "@/components/layout/BaseLayout";
import ProfileCard from "@/components/shared/ProfileCard";
import AboutMe from "@/components/shared/AboutMe";
import FeaturedProjects from "@/components/shared/FeaturedProjects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ghozy Alkhairi</title>
        <meta name="description" content="Ghozy Alkhairi's Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <ProfileCard />
        <AboutMe />
        <FeaturedProjects />
      </BaseLayout>
    </>
  );
}
