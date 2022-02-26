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
              className="container"
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

export default PostDetails;
