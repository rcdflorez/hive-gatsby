import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./OurServices.scss";
import CardServices from "./CardServices";

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

const simulatedData = [
  {
    title: "PEOPLE",
    data: "Loan Origination System with Integrated automated bank transaction scoring and automated credit decisions utilizina traditional statistical modeling."
  },
  {
    title: "HIVE OS",
    data: "Loan Origination System with Integrated automated bank transaction scoring and automated credit decisions utilizina traditional statistical modeling techniques and recurrent neural networks (ILSTM / RIN)."
  },
  {
    title: "MARKETING",
    data: "Perfect mix of customer acquisitions channels that serve your business."
  },
]

const OurServicesGrid = () => {
  let services = FecthServices();
  if (services !== "Loading...") {
    return (
      <Row>
        <Row className="services-container cards container-fluid d-flex text-center text-md-start py-5 px-5 mx-auto">
          <h3 className="pt-5 cards-title">WHAT WE DO</h3>
          {simulatedData.map((card, i) =>
            <CardServices key={i} title={card.title} data={card.data}/>)
          }
        </Row>
      </Row>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default OurServicesGrid;
