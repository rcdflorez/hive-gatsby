import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OurServices.scss";

const regex = /(<([^>]+)>)/gi;

function FecthServices() {
  const [ourServices, setOurServices] = useState(null);

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
      <>
        <h3 className="text-center pt-5">Our services</h3>
        <Row className="services-container pt-5 mt-5 px-5 mx-5">
          {services.map((service, idx) => (
            <Col className="service-card mx-3 p-5 px-4" key={idx}>
              <Row className="img-container">
                <img
                  className="mx-auto"
                  src={service.featured_image_src}
                  alt=""
                />
              </Row>
              <Row className="mx-auto">
                <h5 className="text-center py-4 service-title">
                  {service.title.rendered}
                </h5>
              </Row>
              <Row className="mx-auto">
                <p className="service-description">
                  {service.excerpt.rendered.replace(regex, "")}
                </p>
              </Row>
            </Col>
          ))}
        </Row>
      </>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default OurServicesGrid;
