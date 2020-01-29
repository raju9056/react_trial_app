import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ProductGist/ProductGist';
import './ProductInfo/ProductInfo';


class App extends Component {

  state = {
    products: [
      {
      id: 1,
      name: MSBlobBuilder,
      price: 3434
    },
    {
      id: 1,
    name: MSBlobBuilder,
    price: 3434
    }
  ],
  selectedProduct:{}
}
  productSelectionHandler = (product) => {
    this.setState({selectedProduct: product});
  }

  render() {
    const ProductGists = this.state.products.map(aproduct => {
      return (
        <ProductGist key = {aproduct.name} product = {aproduct}
        clickHandler = {() => {this.productSelectionHandler(aproduct)}} />);
    });
    return (
      <div className="App">
        <div className= "sidebar">
          <div id="menu">
            <p>menu goes here</p>
          </div>
          <div className="productlist">
            {ProductGists}
          </div>
        </div>
        <div className="detailedProductinfo">
          <ProductInfo product= {this.state.selectedProduct}/>
          <p>Good</p>
        </div>
      </div>
    );
  }
}

export default App;
