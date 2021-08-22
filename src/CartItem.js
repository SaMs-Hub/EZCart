import React from 'react';

const CartItem = (props) => {
        // rendering keys from states
		const { price, title, quantity } = props.product;
		const {
			product, 
			onIncreaseQuantity, 
			onDecreaseQuantity, 
			onDeleteProduct} = props
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.image} src={product.img} />
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
                            onClick = {() => onIncreaseQuantity(product)}
						/>
						<img
							alt="decrease"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/66/66889.png"
                            onClick = {() => onDecreaseQuantity(product)}
						/>
						<img
							alt="delete"
							className="action-icons"
							src="https://image.flaticon.com/icons/png/512/1214/1214428.png"
							onClick = {() => onDeleteProduct(product.id)}
						/>
					</div>
				</div>
			</div>
		);
	}


// styles for the given image
const styles = {
	image: {
		height: 110,
		width: 110,
		borderRadius: 4,
		
	}
};

export default CartItem;
