import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./ContactUs.scss";

const ContactUs = () => {
  return (
    <>
      <Row className="contactUs-post-cotainer">
        <div className="container">
          <h3 className="text-center">Contact Us</h3>
          <form action="" className="form-contatcUs">
            <div className="user-data d-md-flex">
              <input type="text" name="formName" id="formName" placeholder="Name" className="me-3 mb-3"/>
              <input type="email" name="formEmail" id="formEmail" placeholder="Email" className=" mb-3"/>
            </div>
            <textarea name="formMessage" id="formMessage" className="formMessage" rows="10" placeholder="Message"></textarea>
            <button type="submit" className="d-flex align-self-end mt-3">SUBMIT</button>
          </form>
        </div>
      </Row>
    </>
  );
};

export default ContactUs;
