import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OurServices.scss";
import CardServices from "./CardServices";

const regex = /(<([^>]+)>)/gi;

function FecthServices() {
  const [ourServices, setOurServices] = useState();

  useEffect(() => {

    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}our_services`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setOurServices(json);
      });

    
  }, []);
  if (!ourServices) return "Loading...";
  else return ourServices;
}

const OurServicesGrid = () => {
  let services = FecthServices();
  if (services !== "Loading...") {
    return (
      <Row>
        <Row className="services-container cards container-fluid d-flex text-center text-md-start py-5 px-5 mx-auto">
          <h3 className="pt-5 cards-title">WHAT WE DO</h3>
          {services.map((card, i) =>
            <CardServices key={i} title={card.title.rendered} data={card.excerpt.rendered}/>)
          }
        </Row>
      </Row>
    );
  } else {
    return(
      <Row>
        <Row className="services-container cards container-fluid d-flex text-center text-md-start py-5 px-5 mx-auto">
          <h3 className="pt-5 cards-title">WHAT WE DO</h3>
          <div className="hive-card">
            <div className="header">
              <div className="square"></div>
              <div className="lines"></div>
            </div>
            <div className="data">
              <div className="title">
                <h3></h3>
              </div>
              <div className="info"></div>
            </div>
          </div>
        </Row>
      </Row>
    )
  }
};

export default OurServicesGrid;
