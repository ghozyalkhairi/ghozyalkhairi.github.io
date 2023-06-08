import BaseLayout from "@/components/layout/BaseLayout"
import CertificationList from "@/components/shared/CertificationList"
import { Box, Text } from "@chakra-ui/react"
import { NextPage } from "next"
import Head from "next/head"

const Certification: NextPage = () => {
  return (
    <>
      <Head>
        <title>Ghozy Alkhairi</title>
        <meta name="description" content="Ghozy Alkhairi's Web Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout>
        <CertificationList />
      </BaseLayout>
    </>
  )
}

export default Certification
