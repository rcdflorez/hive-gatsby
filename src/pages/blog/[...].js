import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero/SubHero";
import NavBar from "../components/navBar/NavBar";
import Container from "react-bootstrap/Container";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

function FecthPostDetails(id) {
  const [PostDetails, setPostDetails] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}posts/${id}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setPostDetails(json);
      });
  }, []);

  if (!PostDetails) return "Loading...";
  else return PostDetails;
}
function createMarkup(html) {
  return {
    __html: html,
  };
}

const PostDetails = ({ location }) => {
  if (location.state) {
    const PostDetails = FecthPostDetails(location.state.id);
    if (PostDetails !== "Loading...") {
      return (
        <>
          <NavBar />
          <Container fluid className="App m-0">
            <SubHero title={location.state.title} className="mb-5 pb-5" />

            <div
              style={{ padding: "10rem 10rem" }}
              className="container post-container"
              dangerouslySetInnerHTML={createMarkup(
                PostDetails.content.rendered
              )}
            />
            <ContactUs />
            <Footer />
          </Container>
        </>
      );
    } else {
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
    return <p>Fail</p>;
  }
};

export default PostDetails;
