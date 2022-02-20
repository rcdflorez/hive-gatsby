import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import ImageSeparator from "../../../../images/iStock-927401824-2260x1019.jpg";
import "./Separator.scss";

const HomeSeparator = () => {
  return (
    <>
      <Row className="home-separator-cotainer mt-5 pt-5">
        <div className="image-holder"></div>
      </Row>
    </>
  );
};

export default HomeSeparator;
