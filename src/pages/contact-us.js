import React from "react";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer/Footer";
import SubHero from "./components/SubHero/SubHero";
import NavBar from "./components/navBar/NavBar";

import ContactUsWhite from "./components/ContactUsWhite/ContactUsWhite";

const ContacUsPage = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        <SubHero title="About Us" />
        <ContactUsWhite />
        <Footer />
      </Container>
    </>
  );
};

export default ContacUsPage;
