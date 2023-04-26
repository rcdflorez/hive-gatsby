import React from "react";
import "./SubHero.scss";
import Bg from '../../../images/bg-1-2000x1000.jpeg'

const SubHero = (props) => {
  const image = !props.bgImage ? Bg : props.bgImage
  return (
    <>
      <div className="row sub-hero-container" style={{
        backgroundImage: `url('${image}')`
      }}>
        <div className="d-flex align-items-end text-center p-0">
          <h1 className="subHero-title">{props.title}</h1>
        </div>
      </div>
    </>
  );
};

export default SubHero;
