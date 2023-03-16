import React from 'react';
import img1 from '../../images/banner2.jpg';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner hero  "  >
            <img className='w-full h-full' id='sliderImg' src={img1} alt="" />
  <div className="hero-overlay bg-opacity-70"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="w-full overlay">
      <div className='content'>
      <h1 className="mb-5 text-5xl font-bold" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Polish Your Image To Shine</h1>
      <p className="mb-5 text-gray-400 font-semibold">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br /> excepturi exercitationem  quasi. In deleniti </p>
      <button className="btn btn-outline text-2xl font-bold text-orange-700 hover:bg-green-700 hover:text-black">Get Started</button>
      </div>
    </div>
  </div>
</div>


    );
};

export default Banner;