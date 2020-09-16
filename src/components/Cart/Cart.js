import React from 'react';

const Cart = (props) => {
    console.log(props.cart.length);
    const product = props.cart
    const item = product.length;
    let totalPrice = product.reduce((total, prd) => total + prd.price, 0);
    let shipCost = 0;
    let price = totalPrice;
    if(totalPrice>50)shipCost = 0;
    else if(totalPrice>40)shipCost = .5;
    else if(totalPrice>30)shipCost = 1;
    else if(totalPrice>20)shipCost = 2;
    else if(totalPrice>10)shipCost = 5;

    const tax = totalPrice/10;
    totalPrice += shipCost + tax;
    return (
        <div>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {item}</h5>
            <p>Product Price: {price.toFixed(2)}</p>
            <p>Shipping Cost: {shipCost}</p>
            <p>Tax + VAT: {tax.toFixed(2)}</p>
            <p>Total Price: {totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default Cart;