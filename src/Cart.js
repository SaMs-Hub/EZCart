import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
	render() {

        const arr = [1, 2,34, "hello rand"]
		return (
			<div className="cart">
				<CartItem />
                <CartItem />
                <CartItem />
			</div>

            
		);
	}
}

export default Cart;
