import React,{Component} from 'react';

import './ProductInfo.css';

class ProductInfo extends Component{

    render(){
        return (
            <div className="productinfo">
                <p className="productName">product {this.props.product.id} {this.props.product.name}</p>
                <p className="productprice">Price : {this.props.product.price}</p>
                <p className="productqoh">Available Qty : {this.props.product.qoh}</p>
            </div>
        );
    }
}
export default ProductInfo;