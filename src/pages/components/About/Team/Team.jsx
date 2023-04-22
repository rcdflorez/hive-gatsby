import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Member from "./Member/Member";
import "./Team.scss";
import TeamImg from '../../../../images/team.png'

const regex = /(<([^>]+)>)/gi;

function FecthTeamMembers() {
  const [teamMembers, setTeamMembers] = useState(null);

  useEffect(() => {
    fetch(
      `${process.env.GATSBY_CMS_BASE_URL}${process.env.GATSBY_CMS_API_URL}team-members`
    )
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setTeamMembers(json);
      });
  }, []);
  if (!teamMembers) return "Loading...";
  else {
    return teamMembers.sort(function (a, b) {
      if (a.id > b.id) {
        return 1;
      }
      if (a.id < b.id) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }
}

const Team = () => {
  const teamMembers = FecthTeamMembers();

  if (teamMembers !== "Loading...") {
    return (
      <Row className="team-cards-cotainer">
        <div className="container my-5">
          <div className="team-title text-center">
            <div className="hexagon">
              <img src={TeamImg} alt="" />
            </div>
            {/* <img src={Hexagon} alt="" className="mb-3"/> */}
            <h2 className="text-center">Meet the Team</h2>
          </div>
          <div className="container text-center p-0">
            <p className="team-text">
              Hive Financial Systems' core advantages lie in our leadership
              team’s extensive industry experience and use of cutting-edge
              technology for marketing, underwriting, scoring, and loan
              management.
            </p>
            <div className="members d-flex flex-column flex-md-row align-items-center justify-content-center flex-wrap">
              {teamMembers.map((teamMember, idx) => 
                <Member
                  key={idx}
                  image={teamMember.featured_image_src}
                  name={teamMember.title.rendered}
                  title={teamMember.excerpt.rendered.replace(regex, "")}
                  link={
                    teamMember.custom_fields.social_linkedin
                      ? teamMember.custom_fields.social_linkedin[0]
                      : null
                  }
                />
              )}
            </div>
          </div>
        </div>
      </Row>
    );
  } else {
    return (
      <>
        <p>Loading...</p>
      </>
    );
  }
};

export default Team;
