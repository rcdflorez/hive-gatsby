import React from "react";
import { Link } from "gatsby";

const Card = (props) => {
  const separateTitle= props.title.split(":")
  return (
    <div className="position-relative card-container row">
      <div className="card-data col-12 col-md-8">
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

      {/* <div className="card-image col-12 col-md-4">
        <img src={props.image} alt="" />
      </div> */}

    </div>
  );
};

export default Card;
