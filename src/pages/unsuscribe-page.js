import React from "react";
import Container from "react-bootstrap/Container";

import SubHero from "./components/SubHero/SubHero";
import NavBar from "./components/navBar/NavBar";

const CrmTest = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        <SubHero title="Unsuscribe Test" />
        <>
          <div data-form-block-id="decb56dc-a505-42ca-a04f-0792294657ea"></div>{" "}
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script>{" "}
          <div id="dBQ3fRuleogpv8_KJKlUFOI1HUnr_HdhKWyOfpHXNUZI"></div>
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/ws-tracking.js?v=1.84.2007"></script>
          <div
            className="d365-mkt-config"
            style={{ display: "none" }}
            data-website-id="BQ3fRuleogpv8_KJKlUFOI1HUnr_HdhKWyOfpHXNUZI"
            data-hostname="5b549ac7cacc4d7cb90524683b5c5736.svc.dynamics.com"
          ></div>
        </>
      </Container>
    </>
  );
};

export default CrmTest;
