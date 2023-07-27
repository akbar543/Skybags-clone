import React from 'react';
import './cards.css';

const star=<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="m233-80 65-281L80-550l288-25 112-265 112 265 288 25-218 189 65 281-247-149L233-80Z"/></svg>

const Cards = ({ id, image, description, review, price, other }) => {
  return (
    <div className='cardsContainer' key={id}>
      <img src={image} alt='img' />
      <p>{description}</p>
      <span className='review'> {star}{star}{star}{star}{star}{review} reviews</span>
      <span className='price'>{price}</span>
      <div className='other'>
        {other.map((item) => (
          <img  src={item} alt='other' />
        ))}
      </div>
    </div>
  );
};

export default Cards;
