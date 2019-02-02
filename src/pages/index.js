import React from "react"

import {
  Hero,
  Layout,
  SEO,
} from '../components'

import { Flex } from '@magicsoup.io/stock'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Flex
      p={[5]}
      flexDirection="column"
    >
      <Hero />
    </Flex>
  </Layout>
)

export default IndexPage
