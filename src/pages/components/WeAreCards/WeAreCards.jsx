import React, { useEffect, useState } from 'react'
import { Row } from 'react-bootstrap'
import './WeAreCards.scss'
import WeAreCard from './WeAreCard'
import hand from '../../../images/hand.png'
import key from '../../../images/key.png'
import cup from '../../../images/cup.png'

const WeAreCards = () => {

  const [dataCard, setDataCard] = useState([])

  useEffect(()=>{
    //switch to fetch
    const simulatedData = [
      {
        title: "PEOPLE",
        img: hand,
        data: "First we support the individual and the collective"
      },
      {
        title: "PROCESS",
        img: key,
        data: "We build the quality and scalability through intentional improvement of processes"
      },
      {
        title: "PERFORMANCE",
        img: cup,
        data: "Results are the guide of direction"
      }
    ]
    setDataCard(simulatedData)
  }, [])

  return (
    <Row className='cards-main'>
      <div className="container-cards">
        {dataCard.length > 0 &&  dataCard.map((card, i) =>
          <WeAreCard 
            key={i} 
            img={card.img}
            title={card.title}
            data={card.data}/>) 
        }
      </div>
  </Row>
  )
}

export default WeAreCards