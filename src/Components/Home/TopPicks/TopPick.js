import React from 'react'
import './topPick.css'
import Cards from './Cards'
import Feature from '../Features/Feature'

const TopPick = () => {
  return (
    <div className='topPickContainer'>
      TopPick
      <Cards/>
      <Feature/>
    </div>
  )
}

export default TopPick
