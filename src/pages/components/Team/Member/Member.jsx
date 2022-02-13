import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Member.scss";

const Member = (props) => {
  return (
    <div className="member-card card-container my-5">
      <img src={props.image} alt="user" />
      <h2>{props.name}</h2>
      <p>{props.title}</p>
    </div>
  );
};

export default Member;
