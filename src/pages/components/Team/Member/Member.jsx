import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Member.scss";

const Member = () => {
  return (
    <div className="member-card card-container my-5">
      <img src="https://hivefs.com/wp-content/uploads/2019/05/JPJames_Website2-300x300-square.png" alt="user" />
      <h2>JP James</h2>
      <p>Chairman</p>
    </div>
  );
};

export default Member;
