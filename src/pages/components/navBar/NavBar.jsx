import React from "react";
import "./NavBar.scss";
import Logo from "./hive_fs_logo_Final_black.png";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class CustNavbar extends React.Component {
  listener = null;
  state = {
    nav: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", null);
  }
  handleScroll = () => {
    if (window.pageYOffset > 150) {
      if (!this.state.nav) {
        this.setState({ nav: true });
      }
    } else {
      if (this.state.nav) {
        this.setState({ nav: false });
      }
    }
  };

  render() {
    const activeStyles = {
      color: "#232325",
    };
    const activeStylesMobile = {
      color: "#fec340",
    };

    return (
      <>
        <Navbar className="d-md-none Nav w-100 " bg="light" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">
              <img height="70" width="70" src={Logo} className="m-sm-1 my-2" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="h-100">
              <Nav className="me-auto my-2 my-lg-0" navbar>
                <Link
                  to="/"
                  activeStyle={activeStylesMobile}
                  className="my-auto mx-3 mx-sm-5"
                >
                  Home
                </Link>
                <Link
                  activeStyle={activeStylesMobile}
                  to="/about-us"
                  className="my-auto mx-3 mx-sm-5"
                >
                  About US
                </Link>
                <Link
                  activeStyle={activeStylesMobile}
                  to="/blog"
                  className="my-auto mx-3 mx-sm-5"
                >
                  Blog
                </Link>
                <Link
                  activeStyle={activeStylesMobile}
                  className="my-auto mx-3 mx-sm-5"
                  to="/careers"
                >
                  Careers
                </Link>
                <Link
                  to="/contact-us"
                  activeStyle={activeStylesMobile}
                  className="my-auto mx-3 mx-sm-5 "
                >
                  Contact US
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div
          className={`container-fluid d-none d-md-block  Nav ${
            this.state.nav && "Nav__black "
          }`}
        >
          <div className="container ">
            <div className="row ">
              <div className=" col-sm-2 col-12  d-flex justify-content-center justify-content-sm-start py-1">
                <Link to="/">
                  {this.state.nav ? (
                    <img
                      height="70"
                      width="70"
                      src={Logo}
                      className="m-sm-1 my-2"
                    />
                  ) : (
                    <img
                      height="90"
                      width="90"
                      src={Logo}
                      className="m-sm-1 my-2"
                    />
                  )}
                </Link>
              </div>
              <div className=" col-sm-10 col-12 d-flex justify-content-center justify-content-sm-end pb-sm-0 pb-3">
                <Link
                  to="/"
                  activeStyle={activeStyles}
                  className="my-auto mx-3 mx-sm-5"
                >
                  Home
                </Link>
                <Link
                  activeStyle={activeStyles}
                  to="/about-us"
                  className="my-auto mx-3 mx-sm-5"
                >
                  About US
                </Link>
                <Link
                  activeStyle={activeStyles}
                  to="/blog"
                  className="my-auto mx-3 mx-sm-5"
                >
                  Blog
                </Link>
                <Link
                  activeStyle={activeStyles}
                  className="my-auto mx-3 mx-sm-5"
                  to="/careers"
                >
                  Careers
                </Link>
                <Link
                  to="/contact-us"
                  className="my-auto mx-3 mx-sm-5 contact-us"
                >
                  Contact US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CustNavbar;
