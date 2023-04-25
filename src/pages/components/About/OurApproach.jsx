import React, { useEffect, useState } from "react";
import './OurApproach.scss'

const regex = /(<([^>]+)>)/gi;
function FecthApproach() {
  const [ourApproach, setOurApproach] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}pages/43`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setOurApproach(json);
      });
  }, []);
  if (!ourApproach) return "Loading...";
  else return ourApproach;
}
function parseHtmlEnteties(str) {
  return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}

const OurApproach = () => {
  let approach = FecthApproach();
  if (approach !== "Loading...") {
    return (
      <div className="ourApproach row position-relative align-items-end align-items-md-center">

        <div className="col-md-9 my-md-4 copy">
          ________ 
          <br></br><br></br>

          <h3 className="custom-title"> 
            {parseHtmlEnteties(approach.title.rendered).replace(regex, "")}
          </h3> 
          <br>
          </br>

          <span className="custom-copy" style={{letterSpacing: "1px"}}> 
            {parseHtmlEnteties(approach.content.rendered).replace(regex, "")}
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="ourApproach row position-relative align-items-end align-items-md-center">
        <div className="col-md-9 my-md-4 copy">
          ________ 
          <br></br><br></br>
          <h3 className="custom-title"></h3> 
          <br>
          </br>
          <span 
            className="custom-copy" 
            style={{letterSpacing: "1px"}}> 
          </span>
        </div>
      </div>
    );
  }
};

export default OurApproach;
