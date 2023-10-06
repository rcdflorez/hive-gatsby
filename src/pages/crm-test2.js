import React from "react";
import Container from "react-bootstrap/Container";

import SubHero from "./components/SubHero/SubHero";
import NavBar from "./components/navBar/NavBar";

const CrmTest = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        <SubHero title="CRM Test" />
        <>
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script>{" "}
          <div
            className="d365-mkt-config"
            style={{ display: "none" }}
            data-website-id="94rHJyMjbzzPnMJjgyin801cXtbSGc04BaPsO2fl9AU"
            data-hostname="5b549ac7cacc4d7cb90524683b5c5736.svc.dynamics.com"
          >
            {" "}
          </div>{" "}
          <div data-form-block-id="43b3ec13-df53-ee11-be6f-000d3a320a41"></div>
        </>
      </Container>
    </>
  );
};

export default CrmTest;
