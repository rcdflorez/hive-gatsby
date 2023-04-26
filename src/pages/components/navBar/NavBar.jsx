import React from "react";
import Logo from "./hive_fs_logo_Final_black.png";
import { Link } from "gatsby";

class Navbar extends React.Component {
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
    if (window.pageYOffset > 750) {
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

    return (
      <div
        className={`container-fluid  Nav ${this.state.nav && "Nav__black "}`}
      >
        <div className="container ">
          <div className="row ">
            <div className=" col-sm-2 col-12  d-flex justify-content-center justify-content-sm-start py-1">
              <Link to="/">
                {this.state.nav ? (
                  <img height="70" src={Logo} className="m-sm-1 my-2" />
                ) : (
                  <img height="90" src={Logo} className="m-sm-1 my-2" />
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
                Carrers
              </Link>
              <Link
                to="/contact-us"
                activeStyle={activeStyles}
                className="my-auto mx-3 mx-sm-5 contact-us"
              >
                Contact US
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Navbar;
