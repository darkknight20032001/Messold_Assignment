import React from 'react'
import './Image.css'
const Image = (props) => {
  return (
    <div className="Tasveer">
        <img src={props.ImageLink} alt='' />
        <p>{props.ImageName}</p>
    </div>
  )
}

export default Image