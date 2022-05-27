import React from 'react';
import notfound from '../NotFound/notfound.jpg'
const NotFound = () => {

    return (
        <div className='lg:min-h-screen'>
            <img className='w-full' src={notfound} alt="" />
        </div>
    );
};

export default NotFound;