import React from 'react';
import BusinessSummery from './BusinessSummery/BusinessSummery';
import Career from './Career';
import Carosel from './Carosel';
import Parts from './Parts/Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <h1 className='text-4xl text-accent my-6 text-center'>PC Builder Bangladesh</h1>
            <Carosel></Carosel>

            <Parts></Parts>
            <BusinessSummery></BusinessSummery>
            <Reviews></Reviews>
            <Career></Career>

        </div>
    );
};

export default Home;