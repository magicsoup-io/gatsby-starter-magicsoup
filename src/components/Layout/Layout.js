import React, { Fragment } from "react"
import Helmet from "react-helmet"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import {
  theme,
  GlobalStyle
} from '../../styled'
import { StaticQuery, graphql } from "gatsby"

import { Header, Footer } from "../"


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <ThemeProvider theme={theme}>
        <Fragment>
          <Header siteTitle={data.site.siteMetadata.title} />
          <GlobalStyle />
            <main>{children}</main>
            <Footer />
        </Fragment>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
