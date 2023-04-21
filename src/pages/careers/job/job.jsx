import React from "react";
import { Link } from "gatsby";
import { Col } from "react-bootstrap";
import arrowImg from './arrow.png'
const Job = (props) => {
  return (
    <>
      <div className="hive-card mx-auto">
        <div className="header">
          <div className="square"></div>
          <div className="lines"></div>
        </div>
        <div className="data d-md-flex">
          <Col xs={12} md={4} className="title px-3 mb-3 text-center text-md-start">
            <h3>{props.title}</h3>
          </Col>
          <div className="info">
          <p style={{ fontWeight: "300" }}>{props.description}</p>
          <aside className="d-flex justify-content-end">
            <Link
              className="view-job"
              id={props.id}
              to={`./${props.link}`}
              state={{ id: props.id, title: props.title }}>
              {" "}
              <img src={arrowImg} alt="" />{" "}
            </Link>
          </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default Job;
