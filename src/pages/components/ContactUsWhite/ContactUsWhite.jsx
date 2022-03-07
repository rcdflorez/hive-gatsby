import React, { useEffect, useState } from "react";

import "./ContactUsWhite.scss";

const ContactUsWhite = () => {
  return (
    <>
      <div className="ContactUsWhite-cotainer container px-0 my-5">
        <div className="form-container-item col-12 col-lg-10 m-auto">
          <h3 className="text-center">
            Get in touch and we'll get back to you as soon as we can. We look
            forward to hearing from you!
          </h3>
          <form
            action="https://formspree.io/f/xyyojleb"
            method="POST"
            className="form-contatcUs col-12 col-lg-10"
          >
            <div className="user-data d-md-flex">
              <input
                type="text"
                name="formName"
                id="formName"
                placeholder="Name"
                className="me-3 mb-3"
              />
              <input
                type="email"
                name="_replyto"
                id="formEmail"
                placeholder="Email"
                className=" mb-3"
              />
            </div>
            <textarea
              name="formMessage"
              id="formMessage"
              className="formMessage"
              rows="10"
              placeholder="Message"
            ></textarea>
            <input type="text" name="_gotcha" style={{ display: "none" }} />
            <button type="submit" className="d-flex align-self-end mt-3">
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUsWhite;
