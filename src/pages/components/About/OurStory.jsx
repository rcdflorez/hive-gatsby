import React, { useEffect, useState } from "react";
import bgImage from "../../../images/iStock-1003964770-1600x1000.jpeg";

const regex = /(<([^>]+)>)/gi;
function FecthStory() {
  const [ourStory, setOurStory] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}pages/45`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setOurStory(json);
      });
  }, []);
  if (!ourStory) return "Loading...";
  else return ourStory;
}
function parseHtmlEnteties(str) {
  return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}

const OurStory = () => {
  let approach = FecthStory();
  if (approach !== "Loading...") {
    return (
      <>
        {" "}
        <div className="row our-approach-container py-5 my-5   ">
          <div
            className="col-6"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundAttachment: "scroll",
              backgroundSize: "cover",
            }}
          ></div>
          <div
            className="col-md-6 mx-auto px-5 text-init py-5  d-flex align-items-center "
            style={{
              minHeight: "450px",
              backgroundColor: "#F5F5F5",
            }}
          >
            <div>
              <h3 style={{ fontWeight: 400 }} className="py-3">
                {parseHtmlEnteties(approach.title.rendered).replace(regex, "")}
              </h3>{" "}
              <p
                className="py-3"
                style={{ fontWeight: 300, lineHeight: "30px" }}
              >
                {parseHtmlEnteties(approach.content.rendered).replace(
                  regex,
                  ""
                )}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
};

export default OurStory;
