import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './WhoWeAre.scss'
import NewsImage from './Rectangle741.png'
import ArrowImage from '../../../images/arrow.png'
import { Link } from 'gatsby'
const WhoWeAre = () => {
  return (
    <Row className='container-weAre'>
      <Col className='weAre-image col-12 col-lg-6'>
        <img src={NewsImage} alt="" />
      </Col>
      <Col className='weAre-data col-12 col-lg-6'>
        <div className="weAre-title">
          <h2>WHO WE ARE</h2>
        </div>
        <div className="weAre-info">
          <p>
          HFS core advantage lies in our leadership team 
          extensive experience. We are supported with cutting 
          edge technology for marketing, underwriting, scoring
           and loan management. 
          </p>
        </div>
        <div className="d-flex justify-content-center justify-content-lg-end">
          <Link to="/about-us">
            <button className='weAre-button mt-3 mt-lg-5'>
              <img src={ArrowImage} alt="" />
            </button>
          </Link>
        </div>
      </Col>
    </Row>
  )
}

export default WhoWeAre