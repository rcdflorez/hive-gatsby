import React, { useState } from "react";

const Member = (props) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Truncate title to 28 characters and add ellipsis
  const truncatedTitle = props.title.length > 25 ? `${props.title.substring(0, 25)}...` : props.title;

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
        <div className="info" 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
          <p
            style={{ cursor: "pointer", position: "relative" }}
          >
            {truncatedTitle}
            {props.title.length > 25 && isHovered && (
              <span
                style={{
                  position: "absolute",
                  top: "-150%", // Position below the title
                  left: "0",
                  backgroundColor: "#333",
                  color: "#fff",
                  padding: "5px",
                  borderRadius: "4px",
                  fontSize: "14px",
                  zIndex: 1, // Make sure the tooltip is on top
                  width: "100%",
                  maxWidth: "100%", // Optional max width
                }}
              >
                {props.title}
              </span>
            )}
          </p>
          {props.link ? (
            <a target="_blank" href={props.link} style={{ textDecoration: "none" }}>
              <h2>{props.name}</h2>
            </a>
          ) : (
            <h2>{props.name}</h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Member;
