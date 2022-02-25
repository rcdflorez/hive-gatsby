import React, { useEffect, useState } from "react";

import "./Careers.scss";
import Job from "./job/job";

const regex = /(<([^>]+)>)/gi;

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
        <div className="Careers-cotainer container px-0 my-5">
          <div className="job-container-item col-12 col-lg-10 m-auto">
            <h3 className="text-center">
              Interested in working with a dynamic and collaborative team? Check
              out our open positions!
            </h3>
            {careers.map((career, idx) => (
              <Job
                key={idx}
                title={decodeHTMLEntities(career.title.rendered).replace(
                  regex,
                  ""
                )}
                id={career.id}
                description={decodeHTMLEntities(
                  career.excerpt.rendered
                ).replace(regex, "")}
                link={career.link.split("/careers/")[1]}
              />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="Careers-cotainer container px-0 my-5">
          <div className="job-container-item col-12 col-lg-10 m-auto">
            <h3 className="text-center">
              Interested in working with a dynamic and collaborative team? Check
              out our open positions!
            </h3>
            <Job title={job.title} description={job.description} />
          </div>
        </div>
      </>
    );
  }
};

export default Careers;
