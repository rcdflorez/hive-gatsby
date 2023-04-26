import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero/SubHero";
import NavBar from "../components/navBar/_NewNavBar";
import Container from "react-bootstrap/Container";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import ImgCarrers from "./Mask Group 2.png";

function FecthCareerDetails(id) {
  const [careerDetails, setCareerDetails] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}careers/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setCareerDetails(json);
      });
  }, []);

  if (!careerDetails) return "Loading...";
  else return careerDetails;
}
function createMarkup(html) {
  return {
    __html: html,
  };
}

const CareerDetail = ({ location }) => {
  if (location.state) {
    const careerDetail = FecthCareerDetails(location.state.id);

    if (careerDetail !== "Loading...") {
      return (
        <>
          <NavBar />
          <Container
            fluid
            className="App m-0 "
            style={{ backgroundColor: "#A2C8D1" }}
          >
            <SubHero title="Careers" bgImage={ImgCarrers} />

            <div
              style={{ padding: "10rem 10rem", backgroundColor: "white" }}
              className="container position-container my-5"
              dangerouslySetInnerHTML={createMarkup(
                careerDetail.content.rendered
              )}
            />
            <Footer />
          </Container>
        </>
      );
    } else {
      return (
        <>
          <NavBar />
          <Container fluid className="App m-0">
            <SubHero title="Careers" bgImage={ImgCarrers} />
            <div className="text-center" style={{ minHeight: "400px" }}>
              <div
                style={{ marginTop: "100%" }}
                class="loader loader--style8 my-auto"
                title="7"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="50px"
                  height="60px"
                  viewBox="0 0 50 60"
                >
                  <rect
                    x="0"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="8"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="16"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
              </div>
            </div>
            <Footer />
          </Container>
        </>
      );
      return (
        <>
          <NavBar />
          <Container fluid className="App m-0">
            <SubHero title={location.state.title} className="mb-5 pb-5" />
            <div className="text-center" style={{ minHeight: "400px" }}>
              <div
                style={{ marginTop: "100%" }}
                class="loader loader--style8 my-auto"
                title="7"
              >
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="50px"
                  height="60px"
                  viewBox="0 0 50 60"
                >
                  <rect
                    x="0"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="8"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0.15s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                  <rect
                    x="16"
                    y="10"
                    width="4"
                    height="10"
                    fill="#333"
                    opacity="0.2"
                  >
                    <animate
                      attributeName="opacity"
                      attributeType="XML"
                      values="0.2; 1; .2"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="height"
                      attributeType="XML"
                      values="10; 20; 10"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="y"
                      attributeType="XML"
                      values="10; 5; 10"
                      begin="0.3s"
                      dur="0.6s"
                      repeatCount="indefinite"
                    />
                  </rect>
                </svg>
              </div>
            </div>
            <ContactUs />
            <Footer />
          </Container>
        </>
      );
    }
  } else {
    return <p>.</p>;
  }
};

export default CareerDetail;
