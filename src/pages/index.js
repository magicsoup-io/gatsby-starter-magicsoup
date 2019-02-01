import React from "react"
import { Link } from "gatsby"

import Hero from '../components/Hero'

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Link to="/components/">Go to components</Link>
  </Layout>
)

export default IndexPage
