import React from 'react'
import './feature2.css'

const Feature2 = ({id,image,description}) => {
  return (
    <div className='feactureContainer' key={id}>
      <img src={image} alt='img'/>
      <p>{description}</p>
    </div>
  )
}

export default Feature2
