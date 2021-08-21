import React from 'react';

class CartItem extends React.Component {
    // added constructor for states
	constructor() {
		super();
		this.state = {
			price: 1029,
			title: 'mobile phone',
			quantity: 1,
			img: ' '
		};
        // this.increaseQuantity = this.increaseQuantity.bind(this);
        // this.testing()
	}
    // testing () {
    //     const promise = new Promise ( (resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 3000);
    //     })
        
    //     promise.then(() => {
    //         // set state acts like async call
    //         this.setState({ quantity: this.state.quantity + 10})

    //         console.log('state', this.state);
    //     });
    // }

    // used arrow for binding
    increaseQuantity = () =>{
        // setstate form 1
        // this.setState({
        //     quantity: this.state.quantity + 1
        // });

        // setState form 2 if prev state is required
        this.setState(( prevState) => {
            return{
                quantity: prevState.quantity + 1
            }
        }, () =>{
            console.log("this.state", this.state)
        });
    }

    decreaseQuantity = () =>{
        const { quantity} = this.state
        if (quantity === 0){
            return ;
        }
        this.setState((prevState) =>{
           return{
               quantity: prevState.quantity - 1
           } 
        },() =>{
            console.log("this.state", this.state)
        });
    }
	render() {

        // rendering keys from states
		const { price, title, quantity } = this.state;
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
