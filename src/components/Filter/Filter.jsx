import React from 'react'
import '../../secondary.css'
const Filter = () => {
  return (
    <div className='position-fixed left-content-border'>
      <div className='filter-wrapper'>
        <div className='container'>
          <div className='label-space'>
            <input type='radio' name='gender' />
            <label>Men</label>
            <br />
            <input type='radio' name='gender' />
            <label>Women</label>
            <br />
            <input type='radio' name='gender' />
            <label>Boys</label>
            <br />
            <input type='radio' name='gender' />
            <label>Girls</label>
          </div>
        </div>
      </div>

      <div className='filter-wrapper'>
        <div className='container'>
          <h3>Categories</h3>
          <div className='label-space'>
            <input type='checkbox' />
            <label>Shirts</label>
            <br />
            <input type='checkbox' />
            <label>Sleep Shirts</label>
            <br />
            <input type='checkbox' />
            <label>Dog shirts</label>
          </div>
        </div>
      </div>

      <div className='filter-wrapper'>
        <div className='container'>
          <h3>Brands</h3>
          <div className='label-space'>
            <input type='checkbox' />
            <label>Highlander</label>
            <br />
            <input type='checkbox' />
            <label>H&M</label>
            <br />
            <input type='checkbox' />
            <label>Roadster</label>
            <br />
            <input type='checkbox' />
            <label>Harvard</label>
            <br />
            <input type='checkbox' />
            <label>Tokyo Talkies</label>
            <br />
            <input type='checkbox' />
            <label>Pantaloons Junior</label>
            <br />
            <input type='checkbox' />
            <label>Max</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Filter
