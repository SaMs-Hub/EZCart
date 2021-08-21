import React from 'react';

class CartItem extends React.Component {
	render() {

		console.log('this.props', this.props)
        // rendering keys from states
		const { price, title, quantity } = this.props.product;
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} />
				</div>
				<div className="right-block">
					<div style={{ fontSize: 25 }}> {title}</div>
					<div style={{ color: '#777' }}> Price:  {price} Rs</div>
					<div style={{ color: '#777' }}> Quantity: {quantity}</div>
					<div className="cart-item-actions">
						{/* {Buttons} */}
						<img
							alt="increase"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/992/992651.png"
                            onClick = {this.increaseQuantity}
						/>
						<img
							alt="decrease"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/66/66889.png"
                            onClick = {this.decreaseQuantity}
						/>
						<img
							alt="delete"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
						/>
					</div>
				</div>
			</div>
		);
	}
}

// styles for the given image
const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: '#777'
	}
};

export default CartItem;
