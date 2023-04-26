import React from 'react'

const CardOurSkills = ({img, title, data}) => {
  return (
    <div className="card-skills">
      <div className="card-skills-header">
        <p className="title">{title}</p>
        <img src={img} alt="" className="icon" />
      </div>
      <div className="card-skills-body">
        <p>{data}</p>
      </div>
    </div>
  )
}

export default CardOurSkills