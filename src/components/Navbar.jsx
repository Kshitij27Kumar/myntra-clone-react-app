import React from 'react'
import logo from '../myntra.png'
const options = ['Mens', 'Womens', 'Kids', 'Home & Living', 'Beauty']
function Navbar() {
  return (
    <div className=''>
      {/*This section is for logo*/}
      <div className=''>
        <img src={logo} alt='myntra logo' className='' width='70' height='50' />
      </div>
      {/* This section is for Options */}
      <div className=''>
        {options.map((item) => (
          <div className='' key={item}>
            <p>{item}</p>
          </div>
        ))}
      </div>
      {/* Search Bar */}
      <div className=''>
        <input type='search' placeholder='Search for Products...' />
      </div>
      {/* User profile */}
      <div className=''></div>
    </div>
  )
}
export default Navbar
