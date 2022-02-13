import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Careers.scss";
import Job from "./job/job"


const Careers = () => {
  const job = { 
    title:'Python Developer',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione enim voluptatem a qui maxime accusantium deserunt est odio eaque quas.'
  }
  return (
    <>
      <div className="Careers-cotainer container px-0 my-5">
        <div className="job-container-item col-12 col-lg-10 m-auto">
          <h3 className="text-center">Interested in working with a dynamic and collaborative team? Check out our open positions!</h3>
          <Job title ={job.title} description = {job.description} />
          <Job title ={job.title} description = {job.description} />
          <Job title ={job.title} description = {job.description} />
        </div>
      </div>
    </>
  );
};

export default Careers;
