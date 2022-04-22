import React from 'react'
import './Image2.css'
const Image2 = (props) => {
  return (
    <div className="Image2">
        <img src={props.GiftLink} alt='' />
        <h3>{props.GiftName}</h3>
        <p>₹{props.GiftPrice}</p>
        <div className="Cart">Add to Cart</div>
    </div>
  )
}

export default Image2