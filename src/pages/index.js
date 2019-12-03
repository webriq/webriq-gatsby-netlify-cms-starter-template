import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import MySwiper from "../components/swiper/swiper"
import SampleForm from "../components/form/form"
import Services from "../components/services/services"
import Blog from "../components/blogsection/"
import HomeBanner from "../components/homebanner/"
// import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import fb from "../images/facebook.png"
import twitter from "../images/twitter.png"
import linkedin from "../images/linkedin.png"
import insta from "../images/instagram.png"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const blogs = this.props.data.allMarkdownRemark.edges
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div>
          <HomeBanner />
          <div className="container pb-4 pt-sm-5 mt-sm-5">
            <p className="pt-3">
              A website or web site is a collection of related network web
              resources, such as web pages, multimedia content, which are
              typically identified with a common domain name, and published on
              at least one web server. Notable examples are wikipedia.org,
              google.com, and amazon.com. Websites can have many functions and
              can be used in various fashions; a website can be a personal
              website, a corporate website for a company, a government website,
              an organization website, etc. Websites are typically dedicated to
              a particular topic or purpose, ranging from entertainment and
              social networking to providing news and education. All publicly
              accessible websites collectively constitute the World Wide Web,
              while private websites, such as a company's website for its
              employees, are typically part of an intranet.
            </p>
          </div>
          <Services />

          <Blog blogs={blogs} />

          <div id="formsection" className="py-5 text-center">
            <div className="container">
              <h2 className="mb-4 pb-3">Contact Us</h2>
              <div className="row">
                <div className="col-md-6 ">
                  <SampleForm
                    form_name="Newsletter Form"
                    form_id="5bcd42f86b63453b251972bc"
                    form_classname="form-newsletter mt-3"
                  >
                    <h3 className="mb-0">Get in Touch</h3>
                    <div className="form-row">
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="email"
                            name="Email Address"
                            id="email_address"
                          />
                          <label htmlFor="email_address">
                            Enter Your Email Address
                          </label>
                        </div>
                        <small className="text-dark form-text mt-2">
                          We will never share your email with anyone else.
                        </small>
                      </div>
                      <div className="col-12 mb-3">
                        <div className="form-group">
                          <input
                            className="form-control"
                            type="text"
                            name="Name"
                            id="full_name"
                          />
                          <label htmlFor="full_name">Enter Your Name</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="webriq-recaptcha" />
                      </div>

                      <div className="col-12">
                        <div className="form-group">
                          <button className="btn-overlap" type="submit">
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </SampleForm>
                </div>
                <div className="col-md-6">
                  <ul className="list-unstyled pb-3 mt-3">
                    <li className="d-inline mx-2">
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={fb}
                          className="img-fluid"
                          alt="social icons"
                        />
                      </a>
                    </li>
                    <li className="d-inline mx-2">
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={insta}
                          className="img-fluid"
                          alt="social icons"
                        />
                      </a>
                    </li>
                    <li className="d-inline mx-2">
                      <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={linkedin}
                          className="img-fluid"
                          alt="social icons"
                        />
                      </a>
                    </li>
                    <li className="d-inline mx-2">
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={twitter}
                          className="img-fluid"
                          alt="social icons"
                        />
                      </a>
                    </li>
                  </ul>
                  <iframe
                    title="Google Map"
                    src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2965.0824050173574!2d-93.63905729999999!3d41.998507000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sWebFilings%2C+University+Boulevard%2C+Ames%2C+IA!5e0!3m2!1sen!2sus!4v1390839289319"
                    width="100%"
                    height="400"
                    frameborder="0"
                    style={{ border: "0" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default IndexPage

export const indexPageQuery = graphql`
  query indexPageQuery {
    site {
      siteMetadata {
        title
        author
        description
      }
    }
    allMarkdownRemark(limit: 2) {
      edges {
        node {
          frontmatter {
            title
            publishedDate(formatString: "MMMM DD, YYYY")
            excerpt
            banner
          }
        }
      }
    }
  }
`
