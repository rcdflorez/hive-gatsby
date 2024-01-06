import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const CrmTest = () => {
  return (
    <>
      <Container fluid className="App m-0 reg-from-parent">
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
          <Container className="reg-form-container">
            <Row>
              <Col className="text-center">
                {" "}
                <img
                  src={
                    "https://bb0f359ca8.imgdist.com/public/users/Integrators/BeeProAgency/1114299_1099789/logo_hive%204.png"
                  }
                  alt="hfa logo"
                  width={400}
                  style={{ aspectRatio: "auto 1122 / 1122" }}
                  className="pt-5"
                />
              </Col>
            </Row>
            <Row>
              <Col className="text-center top-header">
                <h5>Q4 FY 2023</h5>
                <h1>INVESTOR UPDATE</h1>
              </Col>
            </Row>
            <Row>
              <Col className="text-center">
                <img
                  width={50}
                  className="w-full img-fluid py-5 ax-center ay-middle img-icon"
                  src={"https://hfacms.leapcredit.com/email-assets/2.png"}
                  alt="hfa icon"
                />
                <div class="custom-box">
                  <div class="header rounded-top">
                    <h6 class="ax-center">WHAT</h6>
                  </div>
                  <div class="content rounded-bottom ax-center text-center">
                    Q4 FY2023 Investor Update
                  </div>
                </div>
              </Col>
              <Col className="text-center">
                <img
                  width={50}
                  className="w-full img-fluid py-5 ax-center ay-middle img-icon"
                  src={"https://hfacms.leapcredit.com/email-assets/1.png"}
                  alt="hfa icon"
                />
                <div class="custom-box">
                  <div class="header rounded-top">
                    <h6 class="ax-center">WHEN</h6>
                  </div>
                  <div class="content rounded-bottom ax-center text-center">
                    Wednesday, February 7 4:30 PM – 6:00 PM
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="p-0">
              <Col className="text-center">
                <img
                  width={50}
                  className="w-full img-fluid py-5 ax-center ay-middle img-icon"
                  src={
                    "https://hfacms.leapcredit.com/email-assets/location.png"
                  }
                  alt="hfa icon"
                />
                <div class="custom-box">
                  <div class="header rounded-top">
                    <h6 class="ax-center">WHERE</h6>
                  </div>
                  <div class="content rounded-bottom ax-center text-center">
                    3344 Peachtree Road, Suite 2600, Atlanta GA
                  </div>
                </div>
              </Col>
              <Col className="text-center">
                <img
                  width={50}
                  className="w-full img-fluid py-5 ax-center ay-middle img-icon"
                  src={"https://hfacms.leapcredit.com/email-assets/3.png"}
                  alt="hfa icon"
                />
                <div class="custom-box">
                  <div class="header rounded-top">
                    <h6 class="ax-center">LIVE STREAM</h6>
                  </div>
                  <div class="content rounded-bottom ax-center text-center">
                    Begins at 5:00 PM ET
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="text-center py-5">
              <h1>
                We cordially invite you to register for our Q4 FY2023 Investor
                Update, on Wednesday, February 7.
              </h1>
            </Row>
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
          </Container>
        </>
      </Container>
    </>
  );
};

export default CrmTest;
