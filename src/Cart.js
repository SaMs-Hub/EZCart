import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
	// added constructor for states
	constructor() {
		super();
		this.state = {
			products: [
				{
					price: 1029,
					title: 'mobile phone',
					quantity: 1,
					img: ' ',
					id: 1
				},
				{
					price: 9119,
					title: 'smart phone',
					quantity: 10,
					img: ' ',
					id: 2
				},
				{
					price: 100029,
					title: 'laptop',
					quantity: 1,
					img: ' ',
					id: 3
				}
			]
		};

	}
	render() {
		const {products} = this.state;
		return (
			<div className="cart">
				{products.map((product) => {
					return (

					<CartItem 
						product = { product} 
						key= {product.id}
					/>
					)
				})}
			</div>

            
		);
	}
}

export default Cart;
