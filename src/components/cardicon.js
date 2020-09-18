import React from 'react';
import Cart from '../utils/images/cart.svg';


const CartIcon = () => {
    return(
        <div>
            <a href="" className="click-cart">
                <img src = {Cart} className="cart" alt = "Carrito de compra" />
            </a>
        </div>
    )
}

export default CartIcon;