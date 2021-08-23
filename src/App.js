import React from "react";
import CartItem from "./CartItem";
import Cart from "./Cart";
import Navbar from "./Navbar";
import firebase from 'firebase';

class App extends React.Component {
  // added constructor for states
	constructor() {
		super();
		this.state = {
			products: [],
			loading: true
		}
		this.db = firebase.firestore();
	}

	componentDidMount () {
		// firebase
		//   .firestore()
		//   .collection('Products')
		//   .get()
		//   .then((snapshot) => {
		// 	  console.log(snapshot);

		// 	  snapshot.docs.map((doc) => {
		// 		  console.log(doc.data());
		// 	  });

		// 	  const products = snapshot.docs.map((doc) => {
		// 		  const data = doc.data();

		// 		  data['id'] = doc.id;
		// 		  return data;
		// 	  })
		// 	  this.setState({
		// 		  products,
		// 		  loading: false
		// 	  })
		//   })

		this.db
		  .collection('Products')
		//   .where('price','>', 999)
		.orderBy('price', "desc")
		  .onSnapshot((snapshot) => {
			console.log(snapshot);

			snapshot.docs.map((doc) => {
				console.log(doc.data());
			});

			const products = snapshot.docs.map((doc) => {
				const data = doc.data();

				data['id'] = doc.id;
				return data;
			})
			this.setState({
				products,
				loading: false
			})
		})

	}

	handleIncreaseQuantity = (product) => {
		console.log("increase quantity of ", product)
		const { products} = this.state;
		const index = products.indexOf(product);

		// products[index].quantity += 1;

		// this.setState({
		// 	products
		// })

		const docRef = this.db.collection('Products').doc(products[index].id);

		docRef
		 .update({
			 quantity: products[index].quantity + 1

		 })
		 .then(() => {
			 console.log("Updated Quantity")
		 })
		 .catch((error) => {
			 console.log("Error", error)
		 })
	}

	handleDecreaseQuantity = (product) => {
		console.log("decrease quantity of ", product)
		const { products } = this.state;
		const index = products.indexOf(product);

		if (products[index].quantity === 0){
			return ;
		}
		// products[index].quantity -= 1

		// this.setState({
		// 	products
		// })
		const docRef = this.db.collection('Products').doc(products[index].id);

		docRef
		 .update({
			 quantity: products[index].quantity - 1

		 })
		 .then(() => {
			 console.log("Changed Quantity")
		 })
		 .catch((error) => {
			 console.log("Error", error)
		 })
	}

	handleDeleteProduct = (id) => {
		const { products } = this.state;

		// const items = products.filter((item) => item.id !== id);

		// // this.setState({
		// // 	products: items
		// // })
		const docRef = this.db.collection('Products').doc(id);

		docRef
		 .delete()
		 .then(() => {
			console.log("Deleted")
		})
		.catch((error) => {
			console.log("Error", error)
		})
		
	}

  getCartCount = () => {
    const {products} = this.state;

    let count = 0;
    products.forEach((product) => {
      count += product.quantity
    })

    return count;
  }

  getCartTotal = () => {
    const {products} = this.state;

    let cartTotal = 0;

    products.map((product) => {
		if (product.quantity > 0){
      cartTotal = cartTotal + product.quantity * product.price
		}
		return ' '
    })

    return cartTotal;
  }

  addProduct = () => {
	  this.db
	    .collection('Products')
		.add({
			img: ' ', 
			price: 999,
			quantity: 4,
			title: 'Laptop'
		})
		.then((docRef) => {
			console.log("Product has been added", docRef)
		})
		.catch((error) => {
			console.log("Error", error)	
		})
  }
  render () {
    const { products, loading} = this.state;
    return (
      <div className="App">
        < Navbar  count= {this.getCartCount()}/>
        < Cart
          products = { products }
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
          />
		  {loading && <h1>Loading Products ...</h1>}
          <div style={ {padding: 10, fontSize: 20,fontFamily: 'fantasy'}}> Total: {this.getCartTotal()} </div>
      </div>
    );
    }

}



export default App;
