import React from "react"
import "./NavBarLight.scss"
import { StaticImage } from "gatsby-plugin-image"
import { Row, Col } from "react-bootstrap"

class NavbarLight extends React.Component {
  listener = null
  state = {
    nav: false,
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }
  componentWillUnmount() {
    window.removeEventListener("scroll")
  }
  handleScroll = () => {
    if (window.pageYOffset > 750) {
      if (!this.state.nav) {
        this.setState({ nav: true })
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false })
      }
    }
  }

  render() {
    return (
      <div className=" pb-5 nav-light  ">
        <div
          className={`container-fluid  d-flex justify-content-center Nav ${
            this.state.nav && "Nav__black "
          }`}
        >
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-12  d-flex justify-content-center justify-content-sm-start py-1">
                <a href="/">
                  {this.state.nav ? (
                    <img
                      height="30"
                      src="/images/pave_logo_white.png"
                      className="m-sm-1 my-2"
                    />
                  ) : (
                    <img
                      height="30"
                      src="/images/pave_logo_footer.png"
                      className="m-sm-1 my-2"
                    />
                  )}
                </a>
              </div>
              <div className="col-sm-6 col-12 d-flex justify-content-center justify-content-sm-end pb-sm-0 pb-3">
                <a href="/where-we-lend" className="my-auto mx-3 mx-sm-5">
                  Where We Lend
                </a>
                <a href="/how-it-works" className="my-auto mx-3 mx-sm-5">
                  How It Works
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default NavbarLight
