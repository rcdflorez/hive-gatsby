import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import "./BlogCards.scss";
import Card from "./Card/Card";

function FecthBlogPosts() {
  const [ourBlogPosts, setOurBlogPosts] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}posts`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setOurBlogPosts(json);
      });
  }, []);
  if (!ourBlogPosts) return "Loading...";
  else
    return ourBlogPosts.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
}

var element = <div className="example-div"></div>;

function decodeHTMLEntities(str) {
  if (str && typeof str === "string") {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
    element.innerHTML = str;
    str = element.textContent;
    element.textContent = "";
  }

  return str;
}

const BlogCards = () => {
  const authorPost = {
    title: "Building Companies & Investing In Your Community",
    authorName: "Jp James",
    date: "April 14, 2021",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores similique, omnis natus illum excepturi fuga.",
  };

  const blogPosts = FecthBlogPosts();

  if (blogPosts != "Loading...") {
    return (
      <>
        <Row className="blog-cards cards-cotainer">
          <div className="container my-5">
            <div className="container">
              <div className="cards d-flex flex-column flex-md-row align-items-center flex-wrap">
                {blogPosts.map((post, idx) => (
                  <Card
                    title={decodeHTMLEntities(post.title.rendered)}
                    name={post.author_meta.user_nicename}
                    date={post.date}
                    description={decodeHTMLEntities(post.excerpt.rendered)}
                    link={post.link.split(process.env.GATSBY_CMS_BASE_URL)[1]}
                    key={idx}
                    id={post.id}
                  />
                ))}
              </div>
            </div>
          </div>
        </Row>
      </>
    );
  } else {
    return (
      <>
        <Row className="blog-cards cards-cotainer">
          <div className="container my-5">
            <div className="container">
              <div className="cards d-flex flex-column flex-md-row align-items-center flex-wrap">
                <Card
                  title={authorPost.title}
                  name={authorPost.authorName}
                  date={authorPost.date}
                  description={authorPost.description}
                />
                <Card
                  title={authorPost.title}
                  name={authorPost.authorName}
                  date={authorPost.date}
                  description={authorPost.description}
                />
                <Card
                  title={authorPost.title}
                  name={authorPost.authorName}
                  date={authorPost.date}
                  description={authorPost.description}
                />
                <Card
                  title={authorPost.title}
                  name={authorPost.authorName}
                  date={authorPost.date}
                  description={authorPost.description}
                />
                <Card
                  title={authorPost.title}
                  name={authorPost.authorName}
                  date={authorPost.date}
                  description={authorPost.description}
                />
              </div>
            </div>
          </div>
        </Row>
      </>
    );
  }
};

export default BlogCards;
