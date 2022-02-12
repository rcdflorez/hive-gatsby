import React from "react";
import Container from "react-bootstrap/Container";
import OurServicesGrid from "./components/OurServices/OurServices";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Team from "./components/Team/Team"
import BlogCards from "./components/BlogCards/BlogCards"

const IndexPage = () => {
  return (
    <Container fluid className="App">
      {/* <FeaturedPosts /> */}
      <Team />
      <BlogCards />
      <ContactUs />
      <Footer />
    </Container>
  );
};

export default IndexPage;
