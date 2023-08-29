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
          <div data-form-block-id="b7cccc4c-483d-ee11-bdf4-00224805c558"></div>{" "}
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script>{" "}
          <div id="dgwZJOJD-mR9iYS3quQym7qtGdyntAGqYbi09fGybvBA"></div>
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007"></script>
          <div
            className="d365-mkt-config"
            style={{ display: "none" }}
            data-website-id="gwZJOJD-mR9iYS3quQym7qtGdyntAGqYbi09fGybvBA"
            data-hostname="5b549ac7cacc4d7cb90524683b5c5736.svc.dynamics.com"
          ></div>
        </>
      </Container>
    </>
  );
};

export default CrmTest;
