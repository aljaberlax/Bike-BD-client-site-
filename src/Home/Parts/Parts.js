import React, { useEffect, useState } from 'react';
import Booking from './Booking';
import PartsCart from './PartsCart';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
const Parts = () => {
    // const [parts, setParts] = useState([]);
    const { data: parts, isLoading, refetch } = useQuery('parts', () => fetch(`https://morning-harbor-44069.herokuapp.com/parts`)
    .then(res => res.json()))

    console.log(parts)
    if(isLoading){
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch('http://localhost:5000/parts')
    //         .then(res => res.json())
    //         .then(data => setParts(data));
    // }, [])

    return (
        <div className='my-10'>
            <div className='text-center'>
                <h3 className='text-primary  text-3xl font-bold '>Parts we Manufacture</h3>
                
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-10'>
                {
                    parts?.slice(0, 6).map(part => <PartsCart
                        key={part._id}
                        part={part}
                        refetch={refetch}
                    >
                    </PartsCart>)
                }
            </div>
           
        </div>
    );
};

export default Parts;