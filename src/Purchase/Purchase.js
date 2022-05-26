import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Purchase = () => {
    const { productId } = useParams();
    const [product, SetProduct] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const url = `http://localhost:3000/parts/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => SetProduct(data));

    }, [productId, reload]);

    return (
        <div class="hero min-h-screen bg-base-100">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Login now!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">parts name......</span>
                            </label>
                            <input type="text" placeholder="Your name" class="input input-bordered" />
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Your Email address</span>
                            </label>
                            <input type="text" placeholder="Email Address" class="input input-bordered" />
                          
                        </div>
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text">Quantity</span>
                            </label>
                            <input type="text" placeholder=" minimum quantity "  class="input input-bordered" />
                          
                        </div>
                       
                        <div class="form-control mt-6">
                            <button class="btn btn-primary">Confirm Order</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className='product-details'>
        //     <h2>Selected Product : {product.name}</h2>
        //     <br />
        //     <h2> Quantity : {product?.quantity}</h2>
        //     <img style={{ height: '200px' }} src={product.img} alt="" />
        //     <br />

        //     <button >Confirm purchese </button>
        //     <ToastContainer></ToastContainer>
        // </div>
    );
};

export default Purchase;