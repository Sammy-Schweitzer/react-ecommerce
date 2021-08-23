import React from 'react';
import cartImage from '../../../assets/image/cart.svg';

export const CartImage = () => {
    return (
        <div>
            <img className="cartImage" src={cartImage} alt="cart" />
            <p>cart</p>
        </div>
    )
}
