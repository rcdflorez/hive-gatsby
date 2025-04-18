import React from "react";
import { Link } from "gatsby";
import { Col, Row } from "react-bootstrap";
import arrowImg from "./arrow.png";
import "../Careers.scss";

const Job = (props) => {
  return (
    <>
      <div className="hive-card mx-auto">
        <div className="header">
          <div className="square"></div>
          <div className="lines"></div>
        </div>
        <Row className="data align-items-center p-3">
          <Col
            xs={12}
            md={5}
            className="title-location mb-3 mb-md-0 text-center text-md-start"
          >
            <h3 className="mb-1">{props.title}</h3>
            {/* Added optional chaining ?. just in case */}
            <p className="text-muted mb-0">
              {props.location || "Location not specified"}
            </p>
          </Col>
          <Col
            xs={12}
            md={5}
            className="info mb-3 mb-md-0 text-center text-md-start"
          >
            <p
              style={{ fontWeight: "300", fontSize: "0.9rem" }}
              className="mb-0"
            >
              {props.description}
            </p>
          </Col>
          <Col
            xs={12}
            md={2}
            className="d-flex justify-content-center justify-content-md-end"
          >
            <a
              className="view-job" // Keep the class for styling
              href={props.detailPagePath} // Use href for standard links
              target="_blank" // Open in new tab
              rel="noopener noreferrer" // Security measure for target="_blank"
              // Pass job title for potential accessibility use or tooltips if needed
              aria-label={`View details for ${props.title} in a new tab`}
            >
              <img src={arrowImg} alt="" />{" "}
              {/* Alt text could be improved if needed */}
            </a>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Job;
