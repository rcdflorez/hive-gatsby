import React, { useEffect, useState } from "react";
import NavBar from "./components/navBar/NavBar";
// import SubHero from "./components/SubHero/SubHero";
import OurApproach from "./components/About/OurApproach";
import OurStory from "./components/About/OurStory";
import Team from "./components/About/Team/Team";
// import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Container from "react-bootstrap/Container";

const AboutUs = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        {/* <SubHero title="About Us" /> */}
        <OurApproach />
        <OurStory />
        <Team />
        {/* <ContactUs /> */}
        <Footer />
      </Container>
    </>
  );
};

export default AboutUs;
