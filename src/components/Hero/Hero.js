import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Text } from '@magicsoup.io/stock'
const Hero = () => (
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
      <Flex flexDirection="row">
        <Flex 
          pt={5}
          width={2/3}
          color='black'
          justifyContent="end"
        >
          <Box>
            <Text
              fontSize={[5]}
              textAlign="right"
            >
              {data.heroJson.displayTitle}
            </Text>
          </Box>
        </Flex>
        <Box
          p={3}
          width={1/3}
          color='black'
        >
          {data.heroJson.subTitle}
        </Box>
      </Flex>
    )}
  />
)

export default Hero
