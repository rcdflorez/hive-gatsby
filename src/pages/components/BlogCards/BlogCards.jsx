import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./BlogCards.scss";
import Card from "./Card/Card"

const BlogCards = () => {
  const authorPost = {
    title : 'Building Companies & Investing In Your Community',
    authorName: 'Jp James',
    date: 'April 14, 2021',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique, omnis natus illum excepturi fuga.',
  }
  return (
    <>
      <Row className="blog-cards cards-cotainer">
        <div className="container my-5">
          <div className="container">
            <div className="cards d-flex flex-column flex-md-row align-items-center flex-wrap">
              <Card title={authorPost.title} name={authorPost.authorName} date={authorPost.date} description={authorPost.description}/>
              <Card title={authorPost.title} name={authorPost.authorName} date={authorPost.date} description={authorPost.description}/>
              <Card title={authorPost.title} name={authorPost.authorName} date={authorPost.date} description={authorPost.description}/>
              <Card title={authorPost.title} name={authorPost.authorName} date={authorPost.date} description={authorPost.description}/>
              <Card title={authorPost.title} name={authorPost.authorName} date={authorPost.date} description={authorPost.description}/>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default BlogCards;
