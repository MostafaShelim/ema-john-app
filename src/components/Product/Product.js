import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const { img, price, seller, name, stock } = props.product;
    return (
        <div className='product'>
            <div className='prod-img'>
                <img src={img} alt="" />
            </div>
            <div className="prod-details">
                <div className="prod-name">
                    <h4>{name}</h4>
                </div>
                <br/>
                <p>${price}</p>
                <p>by: {seller}</p>
                <p>In stock: {stock}</p>
                <button onClick = {() => props.handleAddProduct(props.product)} className='button-cart'><FontAwesomeIcon icon={faShoppingCart} />add to cart</button>
            </div>
        </div>
    );
};

export default Product;