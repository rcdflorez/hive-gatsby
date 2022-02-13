import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Team.scss";
import Member from "./Member/Member"

const Team = () => {
  const user = {
    image: 'https://hivefs.com/wp-content/uploads/2019/05/JPJames_Website2-300x300-square.png',
    name: 'JP James',
    title: 'Chairman'
  }
  return (
    <>
      <Row className="team-cards-cotainer">
        <div className="container my-5">
          <h2 className="text-center">Meet the Team</h2>
          <div className="container text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad illo numquam corrupti delectus ex molestias a ipsam cupiditate natus accusamus doloribus est sed, labore animi mollitia cum aspernatur similique assumenda!
            <div className="members d-flex flex-column flex-md-row align-items-center flex-wrap">
              <Member image={user.image} name={user.name} title={user.title}/>
              <Member image={user.image} name={user.name} title={user.title}/>
              <Member image={user.image} name={user.name} title={user.title}/>
              <Member image={user.image} name={user.name} title={user.title}/>
              <Member image={user.image} name={user.name} title={user.title}/>
            </div>
          </div>
        </div>
      </Row>
    </>
  );
};

export default Team;
