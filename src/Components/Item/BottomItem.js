import React from 'react'
import "./BottomItem.css"

function BottomItem() {
  return (
    <div className='bottom'>
      
      <div className='box'>

      <div className='box_1'>
      <h2>Customer Reviews</h2>

      <div className='box_1_1'>
        <div className='box_1_1_1'>
          <h1>Customer Reviews</h1>
        </div>

        <div className='box_1_1_2'>
          <h1>Customer Reviews</h1>
        </div>

        <div className='box_1_1_3'>

          <div className='button'><button>Write a review</button></div>
    
        </div>

      </div>
        

      </div>

      <div className='box_2'>
        <div className='box_2_1'>
          <div className='box_2_1_1'>
            <select className='box_2_1_1_1'>
            <option value="most-recent">Most Recent</option>
            <option value="highest-rating">Highest Rating</option>
            <option value="lowest-rating">Lowest Rating</option>
            <option value="with-pictures">Only Pictures</option>
            <option value="pictures-first">Pictures First</option>
            <option value="videos-first">Videos First</option>
            <option value="most-helpful">Most Helpful</option> 
            </select>
            <span className='box_2_1_1_2'>
            </span>
          </div>
        </div>
      </div>

      <div className='box_3'>
        <div className='box_3_1'>
          <div className='box_3_1_1'>
            <div className='box_3_1_1_1'></div>
            <div className='box_3_1_1_2'></div>
            <div className='box_3_1_1_3'></div>
          </div>
          <div className='box_3_1_1'></div>
          <div className='box_3_1_1'></div>
          <div className='box_3_1_1'></div>
          <div className='box_3_1_1'></div>
        </div>
      </div>

      </div>

    </div>
  )
}

export default BottomItem
