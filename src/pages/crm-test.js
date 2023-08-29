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
            class="d365-mkt-config"
            style={{ display: "none" }}
            data-website-id="c-jQq1kWu5_9Q4A3WfCcA7xN-QQ22Y0eNTvFiEUFxl4"
            data-hostname="5b549ac7cacc4d7cb90524683b5c5736.svc.dynamics.com"
          >
            {" "}
          </div>{" "}
          <div data-form-block-id="94c450a0-493d-ee11-bdf4-00224805c558"></div>
        </>
      </Container>
    </>
  );
};

export default CrmTest;
