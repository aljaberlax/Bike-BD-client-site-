import React from 'react';
import guide from '../PcBuyingGuide/Banner.PNG'
const PcBuyingGuide = () => {
    return (
        <div className='flex justify-center items-center mt-5 mb-10 '>
        <img className='w-full' src={guide} alt="" />
        </div>
    );
};

export default PcBuyingGuide;