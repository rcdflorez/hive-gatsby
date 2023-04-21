import React from 'react'
import arrowIcon from "./arrow.png";

const handleSubmit = (e) =>{
  e.preventDefault()
}

const Form = () => {
  return (
    <form className="d-flex flex-column" onSubmit={handleSubmit}>
      <input type="text" placeholder="NAME"/>
      <div className="d-flex align-items-center justify-content-between">
        <input type="email" placeholder="MESSAGE"/>
        <span>
          <button>
            <img src={arrowIcon} alt="" />
          </button>
        </span>
      </div>
    </form>
  )
}

export default Form