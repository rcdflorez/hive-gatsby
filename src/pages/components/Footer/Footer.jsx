import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.scss";
import hiveLogo from "./_newLogo.png";
import Form from "./Form";

const Footer = () => {

  

  return (
    <footer>
      <Row className="footer-cotainer p-2 pb-4 p-md-5 m-md-2">
        <Col xs={12} md={5} className="text-center text-md-start my-5 my-md-0">
          <img src={hiveLogo} alt="" height={80}/>
        </Col>
        <Col xs={12} md={7} className="footer-data">
          <div className="footer-title text-center text-md-start">
            <h2>JOIN OUR <br /> TALENT COMMUNITY</h2>
          </div>
          <div className="footer-text">
            <p>HFS not only assesses people's ability to apply in just seconds, but also has the ability to procure the micro-loans In lust a few minutes.</p>
          </div>
          <div className="footer-contactUs">
            <Form />
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
