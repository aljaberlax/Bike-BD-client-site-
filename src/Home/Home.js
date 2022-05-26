import React from 'react';
import Carosel from './Carosel';
import Parts from './Parts/Parts';

const Home = () => {
    return (
        <div>
             <h1 className='text-4xl text-accent my-6 text-center'>PC Builder Bangladesh</h1>
            <Carosel></Carosel>
           
            <Parts></Parts>
            
        </div>
    );
};

export default Home;