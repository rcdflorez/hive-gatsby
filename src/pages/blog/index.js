import React from "react";
import SubHero from "../components/SubHero/SubHero";
import NavBar from "../components/navBar/_NewNavBar";
import Container from "react-bootstrap/Container";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import BlogCards from "../components/BlogCards/BlogCards";
import ImgCarrers from "./Mask Group 1.png";

const BlogPage = () => {
  return (
    <>
      <NavBar />
      <Container fluid className="App m-0">
        <SubHero title="Blog" bgImage={ImgCarrers} />
        <BlogCards />
        {/* <ContactUs /> */}
        <Footer />
      </Container>
    </>
  );
};

export default BlogPage;
