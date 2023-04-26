import React from 'react'

const WeAreCard = ({img, data, title}) => {
  return (
    <div className="hive-card">
      <div className="header">
        <div className="square"></div>
        <div className="lines"></div>
        <div className="hexagon">
            <img src={img} alt="icon" className="icon" />
        </div>
      </div>
      <div className="data">
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="info">
          {data}
        </div>
      </div>
    </div>
  )
}

export default WeAreCard