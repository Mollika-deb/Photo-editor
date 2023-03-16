import React from 'react';
import img1 from '../../images/about4.jpg';
import img2 from '../../images/about3.jpg';


const About = () => {
    return (
        <div className="hero max-h-fit pb-48 my-32">
        <div className="hero-content flex-col lg:flex-row">
         <div className='relative w-1/2'>
         <img src={img1} alt="" className="rounded-lg w-3/5 shadow-2xl" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
         <img src={img2} alt="" className="absolute w-3/5 right-5 top-1/2 rounded-lg shadow-2xl" data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500"/>
         </div>
          <div className='w-1/2 ml-32 '>
            <h1 className="text-5xl font-bold mt-32" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>About Us   </h1>
            <h1 className="text-3xl mt-5 text-gray-400 font-semibold">PhotoPolish's Story</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn btn-outline text-orange-900 hover:bg-orange-700 hover:text-black mt-5">Get More Info</button>
          </div>
        </div>
      </div>
    );
};

export default About;