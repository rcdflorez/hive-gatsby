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
          {/*
          <div
            data-form-id="86bf7841-169a-ee11-be37-002248081fc5"
            data-form-api-url="https://public-usa.mkt.dynamics.com/api/v1.0/orgs/30abe4d4-b070-4218-9b36-a15cd505d97b/eventmanagement"
            data-cached-form-url="https://assets-usa.mkt.dynamics.com/30abe4d4-b070-4218-9b36-a15cd505d97b/digitalassets/forms/86bf7841-169a-ee11-be37-002248081fc5"
            data-readable-event-id="JTX_RT_Event_Test_1304669132"
          ></div>
          <script src="https://cxppusa1formui01cdnsa01-endpoint.azureedge.net/usa/FormLoader/FormLoader.bundle.js"></script>
       */}
          <script src="https://mktdplp102cdn.azureedge.net/public/latest/js/form-loader.js?v=1.84.2007"></script>{" "}
          <div
            className="d365-mkt-config dynamics-form"
            style={{ display: "none" }}
            data-website-id="ob_8QB_B5qaOqQwmAV96PFmbbEPlpTzIn8NH_V16glI"
            data-hostname="5b549ac7cacc4d7cb90524683b5c5736.svc.dynamics.com"
          >
            {" "}
          </div>{" "}
          <div
            className="dynamics-form-2"
            data-form-block-id="5d55ea41-3fab-ee11-be37-00224805cb79"
          ></div>
        </>
      </Container>
    </>
  );
};

export default CrmTest;
