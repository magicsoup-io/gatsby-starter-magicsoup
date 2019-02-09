import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import { Heading, Container, Box, Flex, Link as MagicLink } from '@magicsoup.io/stock'
import { Menu, P } from '../../styled'

const Header = ({ siteTitle, props }) => (
  <Menu>
    <Container width='100%'>
      <Flex 
        justifyContent='space-between'
        flexWrap='wrap'
        alignItems='center'>
        <Heading as='h1' variant='h1' style={{fontSize: 25}}>
          <Link
            to='/'
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </Flex>
    </Container>
  </Menu>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
