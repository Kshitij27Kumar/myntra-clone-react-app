import React, { useState } from 'react'
import '../../secondary.css'
import Pdata from './Data'
import './Cards.css'
import ProductItem from './ProductItem'
import Filter from '../Filter/Filter'

const Cards = () => {
  return (
    <>
      {/* FILTERING IS DEFINED */}
      <Filter />

      {/* PRODUCT CARD IS DEFINED HERE */}
      <ProductItem />
    </>
  )
}

export default Cards
