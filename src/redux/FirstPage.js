import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from './skybagsSlice'

const FirstPage = () => {

    // const data = [
    //     {
    //         id: 1,
    //         items:1
    //     },
    //     {
    //         id: 2,
    //         items: 2
    //     }
    // ]

    const dispatch = useDispatch()
    const id1 = 1;
    const item1 = 1;
    const price1 = 10;

    const id2 = 2;
    const item2 = 2;   
    const price2 = 20;

    const id3 = 3;
    const item3 = 3;
    const price3 = 30;

  return (
    <div>
      this is home

      <div>
        <div>
            <button onClick={()=>dispatch(addToCart({
                id:id1,
                quantity:item1,
                price:price1
            }))}>Add to cart 1</button>

            <button onClick={()=>dispatch(addToCart({
                id:id2,
                quantity:item2,
                price:price2
            }))}>Add to cart 2</button>

            <button onClick={()=>dispatch(addToCart({
                id:id3,
                quantity:item3,
                price:price3
            }))}>Add to cart 3</button>
        </div>
      </div>
    </div>
  )
}

export default FirstPage
