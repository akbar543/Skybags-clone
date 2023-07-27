import React from 'react'
import './slider.css'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

const data =[
  {
    itemurl:"https://skybags.co.in/cdn/shop/files/Skybags_Homepage-tiles_cityscape_Luggage.jpg?v=1684215393&width=2400"
  },
  {
    itemurl:"https://skybags.co.in/cdn/shop/files/skybags-homepage-banners-luggage.jpg?v=1684156814&width=2400"
  },
  {
    itemurl:"https://skybags.co.in/cdn/shop/files/skybags_homepage_banners_duffle.jpg?v=1684156745&width=2400"
  }
]

const Slider = () => {
  return (
    <Carousel fade>
       

       {data.map((item)=>(
            <Carousel.Item>
            <img
              className="d-block w-100"
              src={item.itemurl}
              alt="First slide"
            />
          </Carousel.Item>
       ))}
       
      </Carousel>
  )
}

export default Slider
