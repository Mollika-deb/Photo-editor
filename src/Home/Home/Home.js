import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Offer from '../offer/Offer';

import SwiperSlider from '../Swiper/SwiperSlider';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <SwiperSlider></SwiperSlider>
           <Offer></Offer>
        </div>
    );
};

export default Home;