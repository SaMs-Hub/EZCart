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

	handleIncreaseQuantity = (product) => {
		console.log("increase quantity of ", product)
		const { products} = this.state;
		const index = products.indexOf(product);

		products[index].quantity += 1;

		this.setState({
			products
		})
	}

	handleDecreaseQuantity = (product) => {
		console.log("decrease quantity of ", product)
		const { products } = this.state;
		const index = products.indexOf(product);

		if (products[index].quantity === 0){
			return ;
		}
		products[index].quantity -= 1

		this.setState({
			products
		})
	}

	handleDeleteProduct = (id) => {
		const { products } = this.state;

		const items = products.filter((item) => item.id !== id);

		this.setState({
			products: items
		})
	}

	// showing cart items
	render() {
		const {products} = this.state;
		return (
			<div className="cart">
				{products.map((product) => {
					return (

					<CartItem 
						product = { product} 
						key= {product.id}
						onIncreaseQuantity = {this.handleIncreaseQuantity}
						onDecreaseQuantity = {this.handleDecreaseQuantity}
						onDeleteProduct = {this.handleDeleteProduct}
					/>
					)
				})}
			</div>

            
		);
	}
}

export default Cart;
