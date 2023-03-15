import React from 'react'
import Cards from './components/Product/Cards'
import data from './components/Product/Data'
import Navbar from './components/Navbar/Navbar.jsx'
import Sort from './components/Sort/Sort.jsx'
import Filter from './components/Filter/Filter.jsx'

const App = () => {
  return (
    <>
      <Navbar />
      <Sort />
      <div className='outer-wrapper'>
        <div className='filter-left-content'>
          <Filter />
        </div>
        <div className='container left-content-border'>
          <div className='flexed'>
            {data.map((val, index) => {
              return (
                <Cards
                  key={index}
                  imgsrc={val.imgscr}
                  pname={val.pname}
                  product={val.product}
                  price={val.price}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
