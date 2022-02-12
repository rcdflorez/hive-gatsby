import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const Card = () => {
  return (
    <div className="position-relative col-12 col-md-6 col-lg-4 p-4">
      <div className="card-container">
        <h5>Building Companies & Investing In Your Community</h5>
        <p className="autor"> Jp James | April 14, 2021</p>
        <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique, omnis natus illum excepturi fuga.</p>
        <p className="read-more"><a href="/">READ MORE</a></p>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Card;
