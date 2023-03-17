import React, { useState } from 'react'
import '../../secondary.css'
import Data from './Data'
import style from './Cards.css'
import ProductItem from './ProductItem'
import Filter from '../Filter/Filter'

const Cards = () => {
  // const [product, setProduct] = useState(Pdata);

  // const filterResult = (catItem) => {
  //   const result = Pdata.filter((currData) => {
  //     //   console.log(currData);
  //       if(catItem === currData.category) {
  //           return currData.category === catItem;
  //       } else if(catItem === currData.pname) {
  //           return currData.pname === catItem;
  //       }
  //   })
  //   console.log(result);
  //   setProduct(result);
  // }

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
