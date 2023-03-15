import React from 'react'
import '../../secondary.css'
import './Sort.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const Sort = () => {
  return (
    <div className='container'>
      <h4>Shirts For Men </h4>
      <div className='flexed'>
        <div className=''>
          <strong>FILTERS</strong>
        </div>
        <div className='container'>
          <select name='Sort' id='sorting'>
            <option value='sortby'>Sort by : Recommendation</option>
            <option value='sortprice'>Price</option>
            <option value='sortdiscount'>Discount</option>
            <option value='best seller'>Best Seller</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Sort
