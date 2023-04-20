import React from "react";
import "./_NewNavBar.scss";
import Logo from "./_newLogo.png";
import MenuIcon from "./_menuIcon.svg"
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
      color: "#8F8445",
    };

    return (
      <>
        <Navbar className=" Nav w-100 " bg="light" expand="xxl">
          <Container fluid>
            <Navbar.Brand href="#" className="mx-auto  ">
              <img
                height="70px"
                width="auto"
                src={Logo}
                className="m-sm-1 my-2"
              />
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
       
      </>
    );
  }
}
export default CustNavbar;
