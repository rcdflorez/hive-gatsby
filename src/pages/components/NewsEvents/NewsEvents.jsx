import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './NewsEvents.scss'
import NewsImage from './Group87.png'
const NewsEvents = () => {
  return (
    <Row className='container-news'>
      <Col className='news-data col-12 col-lg-6'>
        <div className="news-title">
          <h2>NEWS & EVENTS</h2>
        </div>
        <div className="news-info">
          <p> Learn about upcoming events </p>
        </div>
      </Col>
      <Col className='news-image col-12 col-lg-6'>
        <img src={NewsImage} alt="" />
      </Col>
    </Row>
  )
}

export default NewsEvents