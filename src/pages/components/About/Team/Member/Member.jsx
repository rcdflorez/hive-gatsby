import React, { useEffect, useState } from "react";

const Member = (props) => {
  return (

    <div className="hive-card">
      <div className="header">
        <div className="square"></div>
        <div className="lines"></div>
      </div>
      <div className="data">
        <div className="photo">
           <img
            src={props.image}
            alt="user"
            width={200}
            height={200}
            style={{ aspectRatio: "auto 1122 / 1122" }}
          />
        </div>
        <div className="info">
          <p>{props.title}</p>
            {props.link
              ? <a target="_blank" href={props.link} style={{ textDecoration: "none" }}>
                  <h2>{props.name}</h2>
                </a>
              : <h2>{props.name}</h2>
            }
          <p>
            Lorem ipsum dolor sit 
            amet consectetur adipisicing elit. 
            Veniam, voluptatibus expedita quidem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Member;
