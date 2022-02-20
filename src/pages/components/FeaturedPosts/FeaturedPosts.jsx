import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./FeaturedPosts.scss";

const FeaturedPostQuery = "posts&&per_page=2&categories=8";
const regex = /(<([^>]+)>)/gi;

function FecthFeaturedPosts() {
  const [featuredPosts, setfeaturedPosts] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}${FeaturedPostQuery}`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setfeaturedPosts(json);
      });
  }, []);
  if (!featuredPosts) return "Loading...";
  else return featuredPosts;
}

const FeaturedPosts = () => {
  let featuredPosts = FecthFeaturedPosts();
  if (featuredPosts !== "Loading...") {
    return (
      <Row className="featured-post-cotainer">
        <div className="row px-5 d-flex justify-content-center pre-container">
          {featuredPosts.map((post, idx) => (
            <div
              key={idx}
              className={
                " col-md-4 card-container mx-4 p-5" + (idx === 1 ? " last" : "")
              }
            >
              <h3 className="mb-3">
                {decodeURIComponent(post.title.rendered)}
              </h3>

              <p className="description">
                {post.excerpt.rendered.replace(regex, "")} ...
              </p>
              <p className="read-more">
                <a href="/">READ MORE →</a>
              </p>
              <div className="icon"></div>
            </div>
          ))}
        </div>
      </Row>
    );
  } else {
    return <p>Loading...</p>;
  }
};

export default FeaturedPosts;
