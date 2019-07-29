import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{ textAlign: "center" }}>
      <h1>Hello Webriq Mads</h1>
      <p>This is a perfect minimal Gatsby + NetlifyCMS Template</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} />
      <Link to="/blogs/">go to Blog Page</Link>
    </div>
  </Layout>
)

export default IndexPage
