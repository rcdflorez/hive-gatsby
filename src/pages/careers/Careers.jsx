import React, { useEffect, useState } from "react";

import "./Careers.scss";
import Job from "./job/job";
import { Col, Row } from "react-bootstrap";

const regex = /(<([^>]+)>)/gi;

const parse = require("html-react-parser");

function FecthCareers() {
  const [ourCareers, setOurCareers] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}careers`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setOurCareers(json);
      });
  }, []);
  if (!ourCareers) return "Loading...";
  else
    return ourCareers.sort(function (a, b) {
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

function parseHtmlEnteties(str) {
  return str.replace(/&#([0-9]{1,3});/gi, function (match, numStr) {
    var num = parseInt(numStr, 10); // read num as normal number
    return String.fromCharCode(num);
  });
}
function castDiv(content) {
  return React.createElement("div", null, content + " *** ");
}

var element = castDiv();

function decodeHTMLEntities(str) {
  if (str && typeof str === "string") {
    // strip script/html tags
    str = str.replace(/<script[^>]*>([\S\s]*?)<\/script>/gim, "");
    str = str.replace(/<\/?\w(?:[^"'>]|"[^"]*"|'[^']*')*>/gim, "");
    //element.innerHTML = str;
    castDiv(str);
    /*
    str = element.textContent;
    element.textContent = "";*/
    console.log(element.to);
  }

  return str;
}

const Careers = () => {
  const job = {
    title: "Python Developer",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione enim voluptatem a qui maxime accusantium deserunt est odio eaque quas.",
  };

  const careers = FecthCareers();
  if (careers !== "Loading...") {
    return (
      <>
        <Row className="Careers-cotainer p-0">
          <div className="job-container-item">
            {careers.map((career, idx) => (
              <Job
                key={idx}
                title={parse(career.title.rendered.replace(regex, ""))}
                id={career.id}
                description={parse(career.excerpt.rendered.replace(regex, ""))}
                link={career.link.split("/careers/")[1]}
              />
            ))}
          </div>
        </Row>
      </>
    );
  } else {
    return (
      <Row className="Careers-cotainer p-0">
          <div className="job-container-item">
            <Job
              key={1}
              title={job.title}
              description={job.description}
              id={86}
              link={null}
            />
            <Job
              key={2}
              title={job.title}
              description={job.description}
              id={87}
              link={null}
            />
          </div>
        </Row>
    );
  }
};

export default Careers;
