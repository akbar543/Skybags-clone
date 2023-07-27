import React from 'react';
import './home.css';
import Slider from '../../Components/Home/Slider/Slider.js';
import Banner from '../../Components/Home/Banner/Banner.js';
import Banner2 from '../../Components/Home/Banner/Banner2.js';
import Header from '../../Components/Home/Header/Header.js';
import TopPick from '../../Components/Home/TopPicks/TopPick.js';
import Feature2 from '../../Components/Home/Features/Feature2.js';
import data1 from '../../Assets/Data.json';

const Home = () => {
  return (
    <>
    <Slider/>
    <span className='topPick'>TopPicks</span>
    <Header item={`Trending What's New`}/>
    <TopPick data={data1.topickstrending} />

    <Header item={`Top Backpack`}/>
    <TopPick data={data1.topickstrending} FeatureData={data1.featurestopicksBackpacks}/>

    <Header item={`Top Luggage`}/>
    <TopPick data={data1.topickstrending} FeatureData={data1.featurestopicksBackpacks}/>

    <Header item={`Top Duffle`}/>
    <TopPick data={data1.topickstrending} FeatureData={data1.featurestopicksBackpacks}/>

    <Header item={`Occasion`}/>
    <Banner data={data1.slider}/>
    <Header item={`Categories`}/>
    <Banner data={data1.slider}/>
    <Feature2/>
    <Banner2/>
    </>
  )
}

export default Home
