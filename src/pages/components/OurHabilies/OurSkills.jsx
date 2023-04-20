import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import "./OurSkills.scss"
import hourglass from '../../../images/hourglass.png'
import heart from '../../../images/heart.png'
import power from '../../../images/load.png'
import CardOurSkills from './CardOurSkills'

const OurHabilies = () => {

  const simulatedData = [
    {
      title: "FAST",
      img: hourglass,
      data: "HFS not only assesses people's ability to apply in just seconds, but also has the ability to procure the micro-loans In lust a few minutes."
    },
    {
      title: "PURPOSE",
      img: heart,
      data: "HFS not only assesses people's ability to apply in just seconds, but also has the ability to procure the micro-loans In lust a few minutes."
    },
    {
      title: "EMPOWER",
      img: power,
      data: "HFS not only assesses people's ability to apply in just seconds, but also has the ability to procure the micro-loans In lust a few minutes."
    }
  ]

  const [dataCard, setDataCard] = useState([])

  useEffect(()=>{
    //switch to fetch
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

export default OurHabilies