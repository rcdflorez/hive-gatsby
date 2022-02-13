import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Card = (props) => {
  return (
    <div className="position-relative col-12 col-md-6 col-lg-4 p-4">
      <div className="card-container">
        <h5>{props.title}</h5>
        <p className="autor"> {props.name} | {props.date}</p>
        <p className="description">{props.description}</p>
        <p className="read-more"><a href="/">READ MORE</a></p>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Card;
