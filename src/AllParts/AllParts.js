import React, { useEffect, useState } from 'react';
import PartsCart from '../Home/Parts/PartsCart';
import pcbuilder from '../AllParts/maxresdefault.jpg'
const AllParts = () => {
    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/parts')
            .then(res => res.json())
            .then(data => setParts(data));
    }, [])

    return (
        <div className='my-28'>
            <img className=' text-center mx-auto' src={pcbuilder} alt="" />
            <div className='mx-auto my-10 container grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(part => <PartsCart
                        key={part._id}
                        part={part}
                    >
                    </PartsCart>)
                }
            </div>
        </div>
    );
};

export default AllParts;