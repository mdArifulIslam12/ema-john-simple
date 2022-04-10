import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus } from '@fortawesome/free-solid-svg-icons'
const Product = ({product,handlerAddToCart}) => {
    const {name,img,price,ratings,seller} = product
    return (
        <div className='product'>
            <img src={img} alt="" />            
            <div className='product-info'>
                <h6 className='name'>{name}</h6>
                <p className='price'>Price: ${price}</p>
                <p className='seller'>Manufacturer: {seller}</p>
                <p className='rating'>Rating: {ratings} start</p>
                
            </div>
            <button onClick={() => handlerAddToCart(product)} className='btn-cart'>
                    <p className='add-cart'>Add to cart</p>
                    <FontAwesomeIcon icon={faCartPlus} />                       
            </button>
        </div>
    );
};

export default Product;