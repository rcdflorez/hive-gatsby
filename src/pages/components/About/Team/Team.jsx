import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Member from "./Member/Member";
import "./Team.scss";
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
  const user = {
    image:
      "https://hivefs.com/wp-content/uploads/2019/05/JPJames_Website2-300x300-square.png",
    name: "JP James",
    title: "Chairman",
  };
  if (teamMembers !== "Loading...") {
    return (
      <>
        <Row className="team-cards-cotainer px-0 mx-0">
          <div className="container my-5">
            <h2 className="text-center">Meet the Team</h2>
            <div className="container text-center">
              Hive Financial Systems' core advantages lie in our leadership
              team’s extensive industry experience and use of cutting-edge
              technology for marketing, underwriting, scoring, and loan
              management.
              <div className="members d-flex flex-column flex-md-row align-items-center flex-wrap">
                {teamMembers.map((teamMember, idx) => (
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
                ))}
              </div>
            </div>
          </div>
        </Row>
      </>
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
