import React from 'react';
import './Cart.css';

const cart = (props) => {
    const cart = props.cart;
    // reduce use 
    // const total = cart.reduce((total,prd)=> total + prd.price,0)
    let total = 0;
    for (let i = 0; i  < cart.length; i++) {
        const product = cart[i];
        total = total+product.price;
        
    }

    let shipping =0;
    if (total>35) {
        shipping =0;
    }
    else if (total >15) {
        shipping = 4.99;
    }
    else if (total > 0) {
        shipping = 0;
    }

    let tax = (total/10).toFixed(2);
    const all=(total + shipping+Number(tax)).toFixed(2);

    return (
        <div>
            <h3>this is cart</h3>
            <h4>Items Order {cart.length}</h4>
            <p>Product Price {total.toFixed(2)}</p>
            <p>Tax + vat {tax}</p>
            <p><small>Shipping Price {shipping}</small></p>
            <p>Total Price {all}</p>
        </div>
    );
};

export default cart;