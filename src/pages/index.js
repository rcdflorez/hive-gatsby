import React from "react";
import Container from "react-bootstrap/Container";
import OurServicesGrid from "./components/OurServices/OurServices";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team"
import BlogCards from "./components/BlogCards/BlogCards"
import Careers from "./components/Careers/Careers";
import ContactUsWhite from "./components/ContactUsWhite/ContactUsWhite"

const IndexPage = () => {
  return (
    <Container fluid className="App">
      {/* <FeaturedPosts /> */}
      <Team />
      <BlogCards />
      <Careers/>
      <ContactUsWhite />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default IndexPage;
