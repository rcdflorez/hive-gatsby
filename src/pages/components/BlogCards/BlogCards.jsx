import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BlogCards.scss";
import Card from "./Card/Card"

const BlogCards = () => {
  return (
    <>
      <Row className="blog-cards cards-cotainer">
        <div className="container my-5">
          <div className="container">
            <div className="cards d-flex flex-column flex-md-row align-items-center flex-wrap">
              <Card />
              <Card />
              <Card />
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default BlogCards;
