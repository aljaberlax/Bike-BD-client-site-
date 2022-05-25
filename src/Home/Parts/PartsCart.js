import React from 'react';

const PartsCart = ({ part }) => {
    const { name, description, quantity, stock, price, img } = part;
    return (
        <div class="card w-96 bg-base-100 shadow-xl ">
            <div class="card-body flex justify-center items-center">
                <h2 class="card-title">{name}</h2>
                <img src={img} alt="" />
                <p>Description : <small>{description}</small></p>
                <h5>Stock Available: {stock}</h5>
                <h5>Minimum Purchese: {quantity}</h5>
                <h1>Unit Price: {price}</h1>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default PartsCart;