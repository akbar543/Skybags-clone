import React from 'react';
import './home.css';
import Slider from '../../Components/Home/Slider/Slider.js';
import Banner from '../../Components/Home/Banner/Banner.js';
import Banner2 from '../../Components/Home/Banner/Banner2.js';
import Header from '../../Components/Home/Header/Header.js';
import TopPick from '../../Components/Home/TopPicks/TopPick.js';
import Feature2 from '../../Components/Home/Features/Feature2.js';

const Home = () => {
  return (
    <>
    <Slider/>
    <span className='topPick'>TopPicks</span>
    <Header item={`Trending What's New`}/>
    <TopPick/>

    <Header item={`Top Backpack`}/>
    <TopPick/>

    <Header item={`Top Luggage`}/>
    <TopPick/>

    <Header item={`Top Duffle`}/>
    <TopPick/>

    <Header item={`Occasion`}/>
    <Banner/>
    <Header item={`Categories`}/>
    <Banner/>
    <Feature2/>
    <Banner2/>
    </>
  )
}

export default Home
