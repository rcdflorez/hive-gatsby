import React from "react";
import "./_NewNavBar.scss";
import Logo from "./_newLogo.png";
import MenuIcon from "./_menuIcon.svg";
import TWPBadgePortrait from "../../../images/TWP_Atlanta_Portrait_2025.png";
import TWPBadgeLandscape from "../../../images/TWP_Atlanta_2025.png";
import { Link } from "gatsby";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

class CustNavbar extends React.Component {
  listener = null;
  state = {
    nav: false,
    isMobile: false,
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.checkScreenSize();
    window.addEventListener("resize", this.checkScreenSize);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", null);
    window.removeEventListener("resize", this.checkScreenSize);
  }
  
  checkScreenSize = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };
  
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
        <Navbar className=" Nav w-100 " bg="light" expand="">
          <Container fluid style={{ position: 'relative' }}>
            {/* Top Workplaces Badge - positioned on the left */}
            <img
              src={this.state.isMobile ? TWPBadgePortrait : TWPBadgeLandscape}
              style={{
                position: 'absolute',
                left: '15px',
                top: '50%',
                transform: 'translateY(-50%)',
                height: this.state.isMobile ? "60px" : "90px",
                width: "auto",
                zIndex: 10
              }}
              alt="Top Workplaces 2025"
            />
            <Navbar.Brand href="#" className="mx-auto  ">
              <Link to="/">
                <img
                  height="80px"
                  width="auto"
                  src={Logo}
                  className="m-sm-1 my-2"
                />
              </Link>
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
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>
    );
  }
}
export default CustNavbar;
