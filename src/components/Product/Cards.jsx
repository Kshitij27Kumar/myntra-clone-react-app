import React, { useState } from 'react'
import '../../secondary.css'
import data from './Data'
import './Cards.css'
import ProductItem from './ProductItem'
import Filter from '../Filter/Filter'

const Cards = () => {
  const [product, setProduct] = useState(data)

  const filterResult = (catItem) => {
    const result = data.filter((currData) => {
      if (catItem === currData.category) {
        return currData.category === catItem
      } else if (catItem === currData.pname) {
        return currData.pname === catItem
      }
    })
    console.log(result)
    setProduct(result)
  }

  return (
    <>
      <Filter filterResult={filterResult} />
      <ProductItem product={product} />
    </>
  )
}

export default Cards
