import React from 'react'

const CardServices = ({title, data}) => {
  return (
    <div className="hive-card">
      <div className="header">
        <div className="square"></div>
        <div className="lines"></div>
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

export default CardServices