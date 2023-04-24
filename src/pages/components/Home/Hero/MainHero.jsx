import React, { useEffect, useState } from "react";
import "./MainHero.scss";
import HiveVideo from "./HIVE-FS-Trailer-small.mp4";
import { Link } from "gatsby";

const MainHero = () => {
  return (
    <>
      <div className="main-hero-container row position-relative">

        <div className="col-md-6 position-absolute bottom-0 my-4 copy">
          ________ <br></br><br></br>


          <h3 className="custom-title"> EMPOWER & ELEVATE </h3> <br></br>


          <span className="custom-copy"> 
            At Hive Financial Systems we work together to empower 
            each other with microfinance tools and technology to 
            elevate each other´s financial health. 
          </span>
        </div>

      </div>

    </>
  );
};

export default MainHero;
