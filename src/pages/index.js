import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MySwiper from "../components/swiper/swiper"
import SampleForm from "../components/form/form"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import income from "../images/incomes.png"
import team from "../images/men-group-outline.png"
import services from "../images/customer-support.png"
import support from "../images/support.png"

class IndexPage extends React.Component {
  render() {
    const siteTitle = this.props.data.site.siteMetadata.title
    const siteDescription = this.props.data.site.siteMetadata.description
    const blogs = this.props.data.allMarkdownRemark.edges
    console.log(blogs)
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title={siteTitle} description={siteDescription} />
        <div>
          <div className="p-relative">
            <div className="heading-banner">
              <h1 className="mb-4">Gatsby Netlify CMS Starter Template</h1>
              <Link to="/" className="btn ">
                Let's Talk
              </Link>
            </div>
            <MySwiper slidesperview={1}>
              <div>
                <LazyLoadImage
                  effect="blur"
                  className="img-fluid"
                  src="https://source.unsplash.com/1366x480/?dark"
                  alt=""
                />
              </div>
              <div>
                <LazyLoadImage
                  effect="blur"
                  className="img-fluid"
                  src="https://source.unsplash.com/1366x480/?darkshadow"
                  alt=""
                />
              </div>
              <div>
                <LazyLoadImage
                  effect="blur"
                  className="img-fluid"
                  src="https://source.unsplash.com/1366x480/?darkroom"
                  alt=""
                />
              </div>
              <div>
                <LazyLoadImage
                  effect="blur"
                  className="img-fluid"
                  src="https://source.unsplash.com/1366x480/?night"
                  alt=""
                />
              </div>
            </MySwiper>
            <div id="services" className="text-center container">
              <div className="container p-relative">
                <div className="blog-wrap py-4">
                  <div className="row">
                    <div className="col-md-4">
                      <Link to="/">
                        <div className="round">
                          <img
                            src={services}
                            alt="Services"
                            className="img-fluid p-relative"
                            style={{ maxWidth: "130px" }}
                          />
                        </div>
                        <h3 className="text-uppercase text-dark mb-0">
                          Services
                        </h3>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <Link to="/">
                        <div className="round">
                          <img
                            src={income}
                            alt="Income"
                            className="img-fluid p-relative"
                            style={{ maxWidth: "130px" }}
                          />
                        </div>
                        <h3 className="text-uppercase text-dark mb-0">
                          Pricing
                        </h3>
                      </Link>
                    </div>
                    <div className="col-md-4">
                      <Link to="/">
                        <div className="round">
                          <img
                            src={team}
                            alt="Our Team"
                            className="img-fluid p-relative"
                            style={{ maxWidth: "130px" }}
                          />
                        </div>
                        <h3 className="text-uppercase text-dark mb-0">
                          Our Team
                        </h3>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container pb-4 pt-5 mt-5">
            <p className="pt-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              feugiat, lectus at lobortis gravida, quam mauris malesuada erat,
              id semper ex arcu quis ex. Sed fringilla mattis turpis vitae
              tempor. Mauris eget dolor varius, aliquet tellus a, accumsan eros.
              Sed congue sit amet nibh a imperdiet. Fusce euismod mi eget congue
              porta. Sed dapibus magna vitae lectus egestas mollis. In et lacus
              quis sem vestibulum pretium a a turpis. Nullam nec pellentesque
              sapien. Proin at viverra lacus. Donec sit amet est felis. Proin
              congue neque a volutpat iaculis. Pellentesque sed urna vel elit
              tempus cursus. Vestibulum ut metus commodo, volutpat metus ut,
              finibus neque. Morbi ut tempor purus. In vitae mauris turpis. Cras
              in rhoncus leo, eget posuere mauris.
            </p>
          </div>
          <section id="servicescont" className="text-center py-3">
            <div className="container">
              <h2 className="mb-4 font-weight-normal">Services</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="row">
                <div className="col-md-3 px-0">
                  <div className="bg-wrap p-3">
                    <img
                      className="img-fluid p-3"
                      alt="support"
                      src={support}
                    />
                    <h4>Service 1</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas rhoncus turpis augue, nec cursus sem dictum
                      fringilla. Maecenas et massa rutrum, lacinia ipsum nec,
                      sollicitudin sapien. Integer et scelerisque justo. Nam
                      venenatis, libero vel pretium elementum, nibh elit
                      vulputate lorem, nec semper mi nisi ut erat. Duis iaculis
                      risus sed arcu rutrum convallis.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 px-0">
                  <div className="bg-wrap2 p-3">
                    <img
                      className="img-fluid p-3"
                      alt="support"
                      src={support}
                    />
                    <h4>Service 2</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas rhoncus turpis augue, nec cursus sem dictum
                      fringilla. Maecenas et massa rutrum, lacinia ipsum nec,
                      sollicitudin sapien. Integer et scelerisque justo. Nam
                      venenatis, libero vel pretium elementum, nibh elit
                      vulputate lorem, nec semper mi nisi ut erat. Duis iaculis
                      risus sed arcu rutrum convallis.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 px-0">
                  <div className="bg-wrap p-3">
                    <img
                      className="img-fluid p-3"
                      alt="support"
                      src={support}
                    />
                    <h4>Service 3</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas rhoncus turpis augue, nec cursus sem dictum
                      fringilla. Maecenas et massa rutrum, lacinia ipsum nec,
                      sollicitudin sapien. Integer et scelerisque justo. Nam
                      venenatis, libero vel pretium elementum, nibh elit
                      vulputate lorem, nec semper mi nisi ut erat. Duis iaculis
                      risus sed arcu rutrum convallis.
                    </p>
                  </div>
                </div>
                <div className="col-md-3 px-0">
                  <div className="bg-wrap2 p-3">
                    <img
                      className="img-fluid p-3"
                      alt="support"
                      src={support}
                    />
                    <h4>Service 4 </h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Maecenas rhoncus turpis augue, nec cursus sem dictum
                      fringilla. Maecenas et massa rutrum, lacinia ipsum nec,
                      sollicitudin sapien. Integer et scelerisque justo. Nam
                      venenatis, libero vel pretium elementum, nibh elit
                      vulputate lorem, nec semper mi nisi ut erat. Duis iaculis
                      risus sed arcu rutrum convallis.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section id="blogcont" className="py-5">
            <div className="container">
              <div className="row">
                <div className="col-md-4 align-self-center">
                  <h2>Latest News</h2>
                </div>
                <div className="col-md-8">
                  {blogs.map(blog => (
                    <div
                      className="postwrap"
                      key={blog.node.frontmatter.excerpt}
                    >
                      <img
                        src={blog.node.frontmatter.banner}
                        className="img-fluid"
                        alt="banner"
                        style={{ maxWidth: "350px" }}
                      />
                      <h4 className="d-inline px-3">
                        {blog.node.frontmatter.title}
                      </h4>
                      <p>{blog.node.frontmatter.excerpt}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div id="formsection" className="py-4">
            <div className="container">
              <div className="row">
                <div className="col-md-6 mx-auto">
                  <SampleForm
                    form_name="Newsletter Form"
                    form_id="5bcd42f86b63453b251972bc"
                    form_classname="form-newsletter mt-3"
                  >
                    <h2 className="mb-0">Get in Touch</h2>
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
                          <button
                            className="btn btn-primary hvr-shadow"
                            type="submit"
                          >
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </SampleForm>
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
