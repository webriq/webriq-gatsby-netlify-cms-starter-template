import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import MySwiper from "../components/swiper/swiper"
// import SampleForm from "../components/Form"
import { LazyLoadImage } from "react-lazy-load-image-component"
import "react-lazy-load-image-component/src/effects/blur.css"
import { Container } from "reactstrap"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="index-container">
      <h1 style={{ textAlign: "center", padding: "20px" }}>
        Gatsby + NetlifyCMS
      </h1>
      <Container>
        <div className="font-style-area">
          <h2>1. Font Style Implementation</h2>
          <h5>Hosting local font files</h5>
          <ol>
            <li style={{ marginBottom: "0" }}>
              Create a new folder fonts under /src/ -> src/fonts
            </li>
            <li style={{ marginBottom: "0" }}>
              Navigate fonts folder and paste all the font files. (Supported
              fonts: otf, ttf, woff, woff2)
            </li>
            <li style={{ marginBottom: "0" }}>
              Create a new css named - font-face.css and add font-face css code.
              <pre>
                <code>{`
@font-face {
  font-family: "Odachi";
  src: url("../fonts/Odachi.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}

`}</code>
              </pre>
            </li>
            <li style={{ marginBottom: "0" }}>
              In layout.js, import the font-face.css
              <pre>
                <code>{`import "./font-face.css"`}</code>
              </pre>
            </li>
            <li style={{ marginBottom: "0" }}>
              Now, we can specify the font-family to our layout.css. <br />
              Example:
              <pre>
                <code>{`
html {
  font-family: Odachi, sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
h2 {
  font-family: Odachi, sans-serif;
}`}</code>
              </pre>
            </li>
          </ol>
        </div>
        <h2>2. Sample Swiper Slider</h2>
        <MySwiper slidesperview={3}>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/145698/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/2203755/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/362271/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/3657445/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/385548/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/325867/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/1118905/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/2270935/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/1252081/400x400"
              alt=""
            />
          </div>
          <div>
            <LazyLoadImage
              effect="blur"
              className="img-fluid"
              src="https://source.unsplash.com/collection/2411320/400x400"
              alt=""
            />
          </div>
        </MySwiper>

        <div>
          <h2>3. Webriq Forms</h2>
          <ol>
            <li>
              npm install @webriq/gatsby-webriq-form
              <pre>
                <code>{`npm install @webriq/gatsby-webriq-form`}</code>
              </pre>
            </li>
            <li>
              Use WebriQForm component
              <pre>
                <code>
                  {`
import WebriQForm from '@webriq/gatsby-webriq-form'

class ContactPage extends React.Component {
  render() {
    return (
      <WebriQForm 
        name="contactForm"
        data-form-id="<WEBRIQ_FORM_ID_HERE>"
        className="<ADD_CLASSES_HERE>"
      >
        <p>Name: <input type="text" name="name" /></p>
        <p>Message: <textarea name="message"></textarea></p>
        <p><input type="submit" value="Submit" /></p>
      </WebriQForm>
    )
  }
}
`}
                </code>
              </pre>
              NOTE: WEBRIQ_FORM_ID is required. See plugin for more options like
              captcha and more.
            </li>
          </ol>
        </div>
        <div>
          <h2>4. Blog Area</h2>
          <p>This template is a gatsby + netlifyCMS ready</p>
          <ol>
            <li>
              To add new blog entry: Access : http://localhost:8000/admin/#/
            </li>
            <li>
              <Link to="/blog">Blog List</Link>
            </li>
            <li>
              <Link to="/blog-01">Blog Template</Link>
            </li>
          </ol>
        </div>
      </Container>
    </div>
  </Layout>
)

export default IndexPage
