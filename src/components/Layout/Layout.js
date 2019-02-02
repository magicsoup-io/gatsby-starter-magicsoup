import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from 'styled-components'
import theme from '../../styled/theme'
import { StaticQuery, graphql } from "gatsby"

import Header from "../Header"
import "./Layout.css"

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
          <div>
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>&nbsp;and&nbsp;
              <a href="https://github.com/magicsoup-io/gatsby-starter-magicsoup">magigsoup.io</a>
            </footer>
          </div>
        </Fragment>
      </ThemeProvider>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
