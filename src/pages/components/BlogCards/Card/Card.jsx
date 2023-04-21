import React from "react";
import { Link } from "gatsby";

const Card = (props) => {
  const separateTitle= props.title.split(":")
  console.log(separateTitle.length > 1);
  return (
    <div className="position-relative card-container col-12">
      <div className="">
        <p className="type">NEWS</p>
        {separateTitle.length > 1
          ? <h5>{separateTitle[0]}: <br /> {separateTitle[1]}</h5>
          : <h5>{props.title}</h5>
        }
        
        
        <p className="description">{props.description}</p>
        <p className="autor mt-3">
          {"AUTHOR: " + props.name} | {props.date}
        </p>
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
