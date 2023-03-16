import React from 'react';
import img from '../../images/offer2.jpg'

const Offer = () => {
    return (
        <div className="w-full mb-10" >
                <div className='mx-20 my-3 p-5 grid lg:grid-cols-2 gap-5 justify-around'>

                    <div className='flex justify-center items-center'>
                        <div data-aos="fade-right"
                            data-aos-easing="linear"
                            data-aos-duration="3000">
                            <h1 className="text-5xl font-bold" style={{ fontFamily: 'Libre Baskerville', color:'#965a3e' }}>Get 30 Days Free Trial</h1>
                            <h1 className="text-4xl py-3  font-semibold text-gray-400">For premium version</h1>
                            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button className="btn btn-outline text-orange-900 hover:bg-pink-400 hover:text-black mt-5">Get Started</button>
                        </div>
                    </div>
                    <div className='flex  justify-end'>
                        <img src={img} alt="" className='w-3/4 h-auto' style={{ height: "550px" }} data-aos="zoom-in"
                            data-aos-easing="linear"
                            data-aos-duration="3000" />
                    </div>
                </div>
            </div>
    );
};

export default Offer;