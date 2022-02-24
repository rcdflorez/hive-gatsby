import React from "react";
import SubHero from "../components/SubHero/SubHero";
import NavBar from "../components/navBar/NavBar";
import Container from "react-bootstrap/Container";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Careers from "./Careers";

const CareersPage = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        <SubHero title="Careers" />
        <Careers />
        <ContactUs />
        <Footer />
      </Container>
    </>
  );
};

export default CareersPage;
