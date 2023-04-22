import React, { useEffect, useState } from "react";
import bgImage from "./Group87.png";
import './OurStory.scss'

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
        <div className="row our-history" style={{flexDirection: 'row-reverse'}}>
          <div
            className="col-12 col-md-6 bg-image"
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center center",
              backgroundAttachment: "scroll",
              backgroundSize: "cover",
            }}>
          </div>
          <div
            className="col-md-6 mx-auto px-md-5 text-init py-md-5  d-flex align-items-center "
            style={{
              minHeight: "450px",
              backgroundColor: "rgb(143 132 70)",
              color: 'white'
            }}
          >
            <div className="copy">
              <h3 style={{ fontWeight: 400 }} className="pb-3 py-md-3 custom-title">
                {parseHtmlEnteties(approach.title.rendered).replace(regex, "")}
              </h3>{" "}
              <p
                className="py-3 custom-copy"
                style={
                  { fontWeight: 300, lineHeight: "30px", letterSpacing: "1px" }}
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
        
      </>
    );
  }
};

export default OurStory;
