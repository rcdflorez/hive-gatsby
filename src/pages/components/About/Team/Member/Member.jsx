import React, { useEffect, useState } from "react";

const Member = (props) => {
  return (
    <div className="member-card card-container my-5">
      <img
        src={props.image}
        alt="user"
        width={200}
        height={200}
        style={{ aspectRatio: "auto 1122 / 1122" }}
      />
      {props.link ? (
        <a target="_blank" href={props.link} style={{ textDecoration: "none" }}>
          <h2>{props.name}</h2>
        </a>
      ) : (
        <h2>{props.name}</h2>
      )}

      <p>{props.title}</p>
    </div>
  );
};

export default Member;
