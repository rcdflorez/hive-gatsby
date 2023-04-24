import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import "./OurSkills.scss"
import hourglass from '../../../images/hourglass.png'
import heart from '../../../images/heart.png'
import power from '../../../images/load.png'
import CardOurSkills from './CardOurSkills'

const OurSkills = () => {


  const [dataCard, setDataCard] = useState([])

  useEffect(()=>{
    //switch to fetch
    const simulatedData = [
      {
        title: "FAST",
        img: hourglass,
        data: "HFS not only assesses people's feasibility to apply with agility, but also procures microloans in just a few minutes. "
      },
      {
        title: "PURPOSE",
        img: heart,
        data: "Alterative credit demand for options is there, but the supply is not. HFS brings together decades of industry experience with sophisticated automation and technology expertise."
      },
      {
        title: "EMPOWER",
        img: power,
        data: "Market entrants will get the skills to underwrite loans in a simple way in order to incorporate massive amounts of public and private data that has been ignored in making credit decision. HFS can secure enough capital to effectively scale."
      }
    ]
    setDataCard(simulatedData)
  }, [])
  return (
    <Row className="cards-skills">
      {dataCard.length > 0 &&  dataCard.map((card, i) =>
        <CardOurSkills 
          key={i} 
          img={card.img}
          title={card.title}
          data={card.data}/>) 
      }
    </Row>
  );
}

export default OurSkills