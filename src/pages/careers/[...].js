import React, { useEffect, useState } from "react";
import SubHero from "../components/SubHero/SubHero";
import NavBar from "../components/navBar/NavBar";
import Container from "react-bootstrap/Container";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";

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
          <Container fluid className="App m-0">
            <SubHero title={location.state.title} className="mb-5 pb-5" />

            <div
              style={{ padding: "10rem 10rem" }}
              className="container"
              dangerouslySetInnerHTML={createMarkup(
                careerDetail.content.rendered
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
          <div>
            <p> Loading... </p>{" "}
          </div>{" "}
        </>
      );
    }
  } else {
    return <p>Fail</p>;
  }
};

export default CareerDetail;
