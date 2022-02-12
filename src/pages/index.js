import React from "react";
import Container from "react-bootstrap/Container";
import OurServicesGrid from "./components/OurServices/OurServices";
import FeaturedPosts from "./components/FeaturedPosts/FeaturedPosts";

const IndexPage = () => {
  return (
    <Container className="App">
      <FeaturedPosts />
    </Container>
  );
};

export default IndexPage;
