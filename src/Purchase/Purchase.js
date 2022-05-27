import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import auth from '../firebase.init';

const Purchase = () => {
    const [user, loading, error] = useAuthState(auth);

    const { productId } = useParams();
    const [product, SetProduct] = useState([])
    const { register, handleSubmit } = useForm();
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const url = `https://morning-harbor-44069.herokuapp.com/parts/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => SetProduct(data)
            );

    }, [productId, reload]);



    const onSubmit = data => {
        const productName=product.name;
        if (data.quantity >= product.quantity && data.quantity <= product.stock ) {
            console.log(data.quantity)
            const url = `http://localhost:5000/booking`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result);
                    window.alert('Booking successfully added')
                })
        }
        else {
            window.alert('have to purchase minimum quantity with not more then stock available')
        }
    }

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <div class="card lg:max-w-lg bg-base-100  shadow-2xl bg-base-200 justify-center  ">
                        <div class="card-body flex justify-center items-center">
                            <h2 class="card-title">{product?.name}</h2>
                            <img className='rounded-xl' src={product?.img} alt="" />
                            <p>Description : <small>{product?.description}</small></p>
                            <h5>Stock Available: {product?.stock}</h5>
                            <h5>Minimum Purchese: {product?.quantity}</h5>
                            <h1>Unit Price: {product?.price} BDT</h1>

                        </div>
                    </div>

                </div>
                <div className='flex flex-col justify-center items-center'>
                    <h1 className='text-2xl text-center'>Purchese</h1>
                    <div className='card border-2  flex  shadow-2xl'>
                        <form className=' p-10 justify-center items-center flex flex-col shadow-2xl' onSubmit={handleSubmit(onSubmit)}  >
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Product Name</span>

                                </label>
                                <input type="text" required  class="input input-bordered w-full max-w-xs"  {...register("productName", { required: true })}>{}</input>

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your name</span>

                                </label>
                                <input type="text" required placeholder="Your Name" class="input input-bordered w-full max-w-xs"  {...register("name", { required: true, maxLength: 20 })}></input>

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your Email</span>

                                </label>
                                <input type="text" required placeholder="Your Valid email" class="input input-bordered w-full max-w-xs"  {...register("email", { required: true })}></input>

                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Your Country</span>

                                </label>
                                <input type="text" required placeholder="Your Country" class="input input-bordered w-full max-w-xs" {...register("country")} />

                            </div>

                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Quantity</span>

                                </label>
                                <input type="text" placeholder="How much you need?" class="input input-bordered w-full max-w-xs" {...register("quantity")} required />

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Price</span>

                                </label>
                                <input type="text" placeholder="Total Price=Quantity*Unit price" class="input input-bordered w-full max-w-xs" {...register("price")} required />

                            </div>
                            <div class="form-control w-full max-w-xs">
                                <label class="label">
                                    <span class="label-text">Mobile</span>

                                </label>
                                <input type="text" placeholder="Cell No" class="input input-bordered w-full max-w-xs" {...register("mobile")} required />

                            </div>

                            <input type="submit" className='btn btn-secondary my-5' value="Confirm Booking" />

                        </form>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Purchase;