import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <Row className="footer-cotainer ">
        <div className="p-0">
          <Row className="container m-auto p-0 my-5">
            <div className="footer-logo col-12 col-lg-3 p-0">
              <div className="container-logo">
                <img
                  src="https://hivefs.com/wp-content/uploads/2019/05/hive_fs_logo_Final_white-284x300.png"
                  alt=""
                  width={132}
                />
              </div>
            </div>
            <div className="footer-container col-12 col-lg-9 p-md-0 d-flex flex-column flex-md-row justity-content-center justify-content-md-between align-items-center align-items-md-start">
              <div className="contact container-item text-center text-md-start mb-3 mb-md-0">
                <p>CONTACT</p>
                <div className="contact-info">
                  <p>
                    <a href="tel:(888)-355-4483">(888)-355-4483</a>
                  </p>
                  <p>
                    <a href="mailto:support@hivefs.com">support@hivefs.com</a>
                  </p>
                </div>
              </div>
              <div className="home container-item text-center text-md-start mb-3 mb-md-0">
                <ul>
                  <li>
                    <a href="/">HOME</a>
                  </li>
                  <li>
                    <a href="/">ABOUT US</a>
                  </li>
                  <li>
                    <a href="/">BLOG</a>
                  </li>
                  <li>
                    <a href="/">CARRERS</a>
                  </li>
                  <li>
                    <a href="/">CONTACT US</a>
                  </li>
                </ul>
              </div>
              <div className="signUp container-item text-center text-md-start mb-3 mb-md-0">
                <p>SIGN UP OUR NEWSLETTER</p>
                <form action="">
                  <input
                    type="email"
                    name="userEmail"
                    id="userEmail"
                    placeholder="Email Address"
                  />
                  <button type="submit">
                    <img
                      src="https://www.kindpng.com/picc/m/82-823128_transparent-right-arrow-icon-png-back-arrow-android.png"
                      alt=""
                      width={20}
                    />
                  </button>
                </form>
                <p className="copy">© 2022 Hive Financial Systems</p>
              </div>
            </div>
          </Row>
        </div>
      </Row>
    </>
  );
};

export default Footer;
