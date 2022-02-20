import React from "react";
import Container from "react-bootstrap/Container";
import OurServicesGrid from "./components/OurServices/OurServices";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";

import MainHero from "./components/Home/Hero/MainHero";
import HomeSeparator from "./components/Home/Separator/Separator";
import NavBar from "./components/navBar/NavBar";

const IndexPage = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        <MainHero />

        <OurServicesGrid />
        <HomeSeparator />
        <FeaturedPosts />

        <ContactUs />
        <Footer />
      </Container>
    </>
  );
};

export default IndexPage;
