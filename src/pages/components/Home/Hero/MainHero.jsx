import React, { useEffect, useState } from "react";
import "./MainHero.scss";
import HiveVideo from "./HIVE-FS-Trailer-small.mp4";

const MainHero = () => {
  return (
    <>
      <div className="main-hero-container  row ">
        <div className="row">
          <div className="my-auto text-center">
            <h1>Engine of Capital Movement</h1>
            <h4 className="py-4">
              END TO END REAL TIME AUTOMATION FOR THE LENDING INDUSTRY
            </h4>
            <h6>
              Hive Financial Systems brings together decades of industry
              experience with <br /> sophisticated automation and technology
              expertise
            </h6>
            <div className="pt-5 mt-5">
              <a href="#">
                <span className="">CONTAC US</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row py-5 my-5">
        <div className="col-md-7 mx-auto text-center">
          <video className="hive-video w-100" controls>
            <source src={HiveVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  );
};

export default MainHero;
