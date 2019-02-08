import React, { Component } from "react"

import {
  P,
  Hero,
  Layout,
  SEO,
  LanguageSwitcher,
} from '../components'

import { 
  Container 
} from '@magicsoup.io/stock'

import { Link } from 'gatsby'
import { withTranslation } from "react-i18next"

class IndexPage extends Component{
  render() {
    const { t, i18n } = this.props
    return (
      <Layout>
        <Container p={[7]}>
          <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
            <Hero />
            <P fontSize={3}>
              <Link to="/pages/readme">{t(`go_to_readme`)}</Link><br/>
            </P>
            <P py={3}>
              {t(`Static translations also allowed`)}
            </P>

            <LanguageSwitcher i18n={i18n} />
        </Container>
      </Layout>
    )
  }
}

export default withTranslation()(IndexPage)
