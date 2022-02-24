import React from "react";
import { Link } from "gatsby";
const Job = (props) => {
  return (
    <>
      <div className="careers-item my-5">
        <p className="job-title">{props.title}</p>
        <div className="description d-flex flex-column flex-md-row">
          <p style={{ fontWeight: "300" }}>{props.description}</p>

          <Link
            id={props.id}
            to={`./${props.link}`}
            state={{ id: props.id, title: props.title }}
          >
            {" "}
            View Job Description{" "}
          </Link>
        </div>
      </div>
    </>
  );
};

export default Job;
