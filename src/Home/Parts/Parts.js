import React, { useEffect, useState } from 'react';
import PartsCart from './PartsCart';

const Parts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-primary  text-3xl font-bold '>Parts we Manufacture</h3>
                
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                {
                    parts.slice(0, 6).map(part => <PartsCart
                        key={part._id}
                        part={part}
                    >
                    </PartsCart>)
                }
            </div>
        </div>
    );
};

export default Parts;