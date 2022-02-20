import React from "react";
import "./SubHero.scss";

const SubHero = (props) => {
  return (
    <>
      <div className="row sub-hero-container ">
        <div className="d-flex align-items-center text-center">
          <h1 className="mx-auto pt-4">{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default SubHero;
