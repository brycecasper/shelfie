import React, {Component} from 'react';

class Product extends Component {
    render(){
        const {img, name, price} = this.props
        return(
            <div>
                {img}
                {name}
                {price}
            </div>
        )
    }
}

export default Product;