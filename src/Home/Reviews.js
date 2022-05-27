import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import people1 from '../assets/review/people1.png'
import people2 from '../assets/review/people2.png'
import people3 from '../assets/review/people3.png'

const Reviews = () => {

    const [reviews, setReviews] = useState([]);
    const navigate=useNavigate();
    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [reviews])
    // const reviews = [
    //     {
    //         _id: 1,
    //         name: 'AL Jaber',
    //         review: 'Hi i am jaber , form Canada. I like this company because their shipment so good and shiped so quickely.',
    //         location: 'Canada',
    //         img: people1
    //     },
    //     {
    //         _id: 2,
    //         name: 'Md Rakibul islam',
    //         review: 'I am highly recommanded this company . Such a good behaibhour.',
    //         location: 'Bangladesh',
    //         img: people2
    //     },
    //     {
    //         _id: 3,
    //         name: 'Anne Maria',
    //         review: 'I like their Parts and their parts price is less then the others company and product quality is good',
    //         location: 'Australia',
    //         img: people3
    //     },
    // ];
    return (
        <section className='my-28'>
            <div className=''>
                <div className=' text-center'>
                    
                    <h2 className='text-3xl'>Our Valuable Customers Reviews</h2>
                </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-10'>
                {
                    reviews?.map(review => <>
                        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                            <div className="card-body">
                                <p>{review.review}</p>
                                <div className="flex items-center">
                                    <div className="avatar">
                                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                            <img src={review.img} alt="" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-xl'>{review.name}</h4>
                                        <p>{review.location}</p>
                                       <div>Ratings: {review.ratings}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </section>
    );
};

export default Reviews;