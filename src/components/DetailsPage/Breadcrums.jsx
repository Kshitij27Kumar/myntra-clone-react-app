import React from 'react'
import '../../secondary.css'

const Breadcrums = (props) => {
  return (
    <>
      <div className='container'>
        <h4 style={{ 'text-transform': 'capitalize' }}>{props.title}</h4>
      </div>
    </>
  )
}
export default Breadcrums
