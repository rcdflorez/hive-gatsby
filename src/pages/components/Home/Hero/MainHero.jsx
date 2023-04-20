import React, { useEffect, useState } from "react";
import "./MainHero.scss";
import HiveVideo from "./HIVE-FS-Trailer-small.mp4";
import { Link } from "gatsby";

const MainHero = () => {
  return (
    <>
      <div className="main-hero-container row position-relative">

        <div className="col-md-6 position-absolute bottom-0 my-4 p-5 copy">
          ________ <br></br><br></br>


          <h3 className="custom-title"> EMPOWER & ELEVATE </h3> <br></br>


          <span className="custom-copy"> The Hive works together to empower each 
other with micro-finance tools & techology
to Elevate each other's financial health.</span>
        </div>

      </div>

    </>
  );
};

export default MainHero;
