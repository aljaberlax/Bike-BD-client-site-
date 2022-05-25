import React, { useEffect, useState } from 'react';
import PartsCart from './PartsCart';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/parts')
        .then(res => res.json())
        .then(data => setParts(data));
    }, [])

    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 text-center justify-center items-center  mx-auto'>
             {
            parts.slice(0,3).map(part => <PartsCart
                key={part._id}
                part={part}
            >
            </PartsCart>)
        }
        </div>
    );
};

export default Parts;