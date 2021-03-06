import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';
import Review from './Review';
import Summery from './Summery';
import Tools from './Tools';
import Connection from '../../ExtraItem/Connection/Connection'
import Achievement from '../../ExtraItem/Achievement/Achievement';
import './Home.css'

const Home = () => {
    return (
        <div className='homeMain'>
           
           
            <Banner></Banner>
            <Tools></Tools>
            <Review></Review>
            <Connection></Connection>
            <Achievement></Achievement>
            <Summery></Summery>
        </div>
    );
};

export default Home;