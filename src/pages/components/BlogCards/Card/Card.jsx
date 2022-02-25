import React from "react";
import { Link } from "gatsby";

const Card = (props) => {
  return (
    <div className="position-relative col-12 col-md-6 col-lg-4 p-4 h-100">
      <div className="card-container h-100">
        <h5>{props.title}</h5>
        <p className="autor">
          {" "}
          {props.name} | {props.date}
        </p>
        <p className="description">{props.description}</p>
        <p className="read-more">
          <Link
            id={props.id}
            to={`./${props.link}`}
            state={{ id: props.id, title: props.title }}
          >
            Read More →
          </Link>
        </p>
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Card;
