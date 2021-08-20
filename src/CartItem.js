import React from 'react';

class CartItem extends React.Component {
    constructor (){
        super();
        this.state = {
            price: 1029,
            title: 'mobile phone',
            quantity: 1,
            img: ' '
        }
    }
    render (){
        const { price, title, quantity} = this.state;
        return(
            <div className = "cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style= { {fontSize: 25}}> {title}</div>
                    <div style= {{ color: '#777'}}> {price}</div>
                    <div style= {{ color: '#777'}}> {quantity}</div>
                    <div className="cart-item-actions">
                        {/* {Buttons} */}
                        <img alt="increase" className= "action-icons" src="https://img-premium.flaticon.com/png/128/1665/premium/1665629.png?token=exp=1629448442~hmac=e1906af09f7cedc1d05c514929a717ff" />
                        <img alt="decrease" className= "action-icons" src="https://image.flaticon.com/icons/png/512/66/66889.png" />
                        <img alt="delete" className= "action-icons" src="https://img-premium.flaticon.com/png/512/484/premium/484611.png?token=exp=1629448591~hmac=58538add3b06cbb030bd2768b0845967" />
                        
                    </div>
            </div>
        </div>
        );
    };
    
}

const styles = {
    image: {
      height: 110,
      width: 110, 
      borderRadius: 4,
      background: '#777'
    }
  }

export default CartItem;