import React from "react"
import { graphql } from "gatsby"
import {
  Hero,
  Layout,
  SEO,
} from '../components'

import { Flex, Box, Heading } from '@magicsoup.io/stock'

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO title={post.frontmatter.title} keywords={[`gatsby`, `application`, `react`]} />
      <Flex
        p={[5]}
        flexDirection="column"
      >
        <Hero />
        <Box py={[4]}>
          <Heading>{post.frontmatter.title}</Heading>
          <Box dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
      </Flex>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`