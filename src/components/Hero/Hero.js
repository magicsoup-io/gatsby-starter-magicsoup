import React, { Component } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Heading, Text } from '@magicsoup.io/stock'

class Hero extends Component {

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeroQuery {
            heroJson {
              displayTitle
              subTitle
            }
          }
        `}
        render={data => (
          <Flex
            pt={6}
            alignItems="center"
          >
            <Box>
              <Heading as="h1" variant="h1">
                {data.heroJson.displayTitle}
              </Heading>
              <Text>
                {data.heroJson.subTitle}<br/>
              </Text>
            </Box>
          </Flex>
        )}
      />
    )
  } 
}

export default Hero
