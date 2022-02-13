import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Job = (props) => {
  return(
    <>
      <div className="careers-item my-5">
        <p className="job-title">{props.title}</p>
        <div className="description d-flex flex-column flex-md-row">
          <p>{props.description}</p>
          <button>View Job Description</button>
        </div>
      </div>
    </>
  )
};

export default Job;