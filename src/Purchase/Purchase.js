import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const Purchase = () => {
    const { productId } = useParams();
    const [product, SetProduct] = useState([])
    const [reload, setReload] = useState(false)
    useEffect(() => {
        const url = `http://localhost:3000/product/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => SetProduct(data));

    }, [productId, reload]);

    return (
        <div className='product-details'>
            <h2>Selected Product : {product.name}</h2>
            <br />
            <h2> Quantity : {product?.quantity}</h2>
            <img style={{ height: '200px' }} src={product.img} alt="" />
            <br />
          
            <button >Confirm purchese </button>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Purchase;