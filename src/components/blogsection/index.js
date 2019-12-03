import React from "react"
import { Link } from "gatsby"
const slugify = require("slugify")

const Blog = props => {
  console.log(props)
  return (
    <section id="blogcont" className="py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 align-self-center ">
            <h2>Latest News</h2>
          </div>
          <div className="col-md-8">
            {props.blogs.map(blog => (
              <div
                className="postwrap mb-4"
                key={blog.node.frontmatter.excerpt}
              >
                <img
                  src={blog.node.frontmatter.banner}
                  className="img-fluid"
                  alt="banner"
                  style={{ maxWidth: "350px" }}
                />

                <Link to={slugify(blog.node.frontmatter.title).toLowerCase()}>
                  <h4 className="d-block">{blog.node.frontmatter.title}</h4>
                </Link>
                <p>{blog.node.frontmatter.excerpt}</p>
              </div>
            ))}
            <Link to="/" className="btn-overlap">
              View All
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
