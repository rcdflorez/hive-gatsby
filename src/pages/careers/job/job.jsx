import React from "react";
import { Link } from "gatsby";
import { Col } from "react-bootstrap";
import arrowImg from "./arrow.png";
import "../Careers.scss"; // Import parent styles if needed, or move relevant styles

const Job = (props) => {
  return (
    <>
      {/* */}
      <div className="hive-card mx-auto">
        {/* */}
        <div className="header">
          <div className="square"></div>
          <div className="lines"></div>
        </div>
        {/* */}
        <div className="data d-md-flex align-items-center">
          {" "}
          {/* Use align-items-center for better vertical alignment */}
          {/* */}
          <Col
            xs={12}
            md={5}
            className="title px-3 mb-3 mb-md-0 text-center text-md-start"
          >
            {/* */}
            <h3>{props.title}</h3>
          </Col>
          {/* */}
          <Col
            xs={12}
            md={5}
            className="info px-3 mb-3 mb-md-0 text-center text-md-start"
          >
            {/* Display Location */}
            <p style={{ fontWeight: "300", marginBottom: 0 }}>
              {props.location}
            </p>
          </Col>
          {/* */}
          <Col
            xs={12}
            md={2}
            className="d-flex justify-content-center justify-content-md-end px-3"
          >
            {/* */}
            <Link
              className="view-job" //
              to={props.detailPagePath} // Use the constructed path for internal Gatsby navigation
              state={{ id: props.id, title: props.title }}
            >
              {" "}
              {/* Pass ID and Title */} {/* */}
              <img src={arrowImg} alt="View Job Details Arrow" />{" "}
              {/* Added alt text */}
            </Link>
          </Col>
        </div>
      </div>
    </>
  );
};

export default Job;
