import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, incrementQuantity } from '../../redux/skybagsSlice'
import { styled } from 'styled-components'


const Cart = () => {

    const dispatch = useDispatch()

    const products = useSelector((state)=>state.skybags.products)

    const[totalPrice, setTotalPrice]=useState("")

    useEffect(()=>{
      let Total = 0;
      products.map((item)=>{
        Total += item.price * item.quantity
        return setTotalPrice(Total.toFixed(2))
      })
    },[products])

  return (
    <Wrap>
      <h2>Cart</h2>
    {
      products.map((items)=>(
      <div className="card">
        <div className="img"><img style={{width: '300px'}} src={items.images[0][0]} alt=''/></div>
        <div className="title">{items.title}</div>
        <div className="color">{items.color}</div>
        <div className="bottom">
            <div>
                <button onClick={()=>dispatch(decrementQuantity(items.id))}>-</button>
                <span>{items.quantity}</span>
                <button onClick={()=>dispatch(incrementQuantity(items.id))}>+</button>
            </div>
            <div><span>Rs. {items.quantity*items.price}</span></div>
        </div>
      </div>

    ))
    }
    </Wrap>
  )
}

export default Cart

const Wrap = styled.div`
    .card{
        width: 400px;
    }
`