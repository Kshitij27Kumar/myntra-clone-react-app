import React from 'react'
import '../../secondary.css'
const Cards = (props) => {
  return (
    <div className='cards'>
      <div className='card'>
        <div className='slider'>
          <img src={props.imgsrc} alt='' className='product-image' />
        </div>
        <div className='card-info'>
          <h3 className='card-category'>{props.pname}</h3>
          <p className='card-title'>{props.product}</p>
          <p className='card-price'>{props.price}</p>
          <div className='wishlist-wrapper'>
            <button className='wishlist'> Add to Bag </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
