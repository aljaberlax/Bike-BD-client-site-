import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    useEffect(() => {
        if (user) {
            fetch(`https://pc-builder-bd.onrender.com/booking`, {
                method: 'Get',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem("accessToken")}`
                }
            })
                .then(res => {
                    console.log('res', res)
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken')
                        navigate('/')
                    }

                    return res.json()
                })
                .then(data => setBookings(data));
        }
    }, [user])

   
    return (
        <div>
        <h1>My Orders : {bookings.length}</h1>
        <div class="overflow-x-auto">
            <table class="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>User Name</th>
                        <th>Parts Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Country</th>
                        <th>Option</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        bookings.map((a, index) => <tr>
                            <th>{index + 1}</th>
                            <td>{a.name}</td>
                            <td>{a.productName}</td>
                            <td>{a.quantity}</td>
                            <td>{a.price}</td>
                            <td>{a.country}</td>
                            <td><button  className='btn btn-secondary'>Cancle Order</button></td>
                        </tr>)
                    }



                </tbody>
            </table>
        </div>
    </div>
    );
};

export default MyOrders;