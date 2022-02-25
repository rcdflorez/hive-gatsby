import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./FeaturedPosts.scss";
import { Link } from "gatsby";

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
function parseHtmlEnteties(str) {
  return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
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
              <h3 className="mb-3">{parseHtmlEnteties(post.title.rendered)}</h3>

              <p className="description">
                {post.excerpt.rendered.replace(regex, "")} ...
              </p>
              <p className="read-more">
                <Link
                  id={post.id}
                  to={`/blog/${
                    post.link.split(process.env.GATSBY_CMS_BASE_URL)[1]
                  }`}
                  state={{
                    id: post.id,
                    title: parseHtmlEnteties(post.title.rendered),
                  }}
                >
                  READ MORE →
                </Link>
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
