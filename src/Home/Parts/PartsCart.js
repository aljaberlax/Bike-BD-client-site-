import React from 'react';
import { useNavigate } from 'react-router-dom';

const PartsCart = ({ part }) => {
    const {_id, name, description, quantity, stock, price, img } = part;
    const navigate = useNavigate();

    const navigateToProductDetail = id => {
        navigate(`/product/${id}`);
    }
    return (
        <div class="card w-96 bg-base-100 shadow-2xl bg-base-200 justify-center  ">
            <div class="card-body flex justify-center items-center">
                <h2 class="card-title">{name}</h2>
                <img className='rounded-xl' src={img} alt="" />
                <p>Description : <small>{description}</small></p>
                <h5>Stock Available: {stock}</h5>
                <h5>Minimum Purchese: {quantity}</h5>
                <h1>Unit Price: {price} BDT</h1>
                <div class="card-actions justify-end">
                    <button onClick={() => navigateToProductDetail(_id)} class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCart;