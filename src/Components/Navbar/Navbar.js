import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import { useSelector } from 'react-redux'

const Navbar = () => {

    const products = useSelector((state)=>state.skybags.products)

  return (
    <Wrap>
      <div className="container">
        <div><Link to='/'>Home</Link></div>
        <div><Link to='/prod/:id'>Item</Link></div>
        <div><Link to='/cart'>Cart</Link></div>
        <div><Link to='/extra'></Link></div>
        <div>Cart Items: {products.length > 0 ? products.length : 0}</div>
      </div>
    </Wrap>
  )
}

export default Navbar

const Wrap = styled.div`
    .container{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        padding: 30px;
    }
    a{
        color: black;
        font-size: 20px;
    }
`
