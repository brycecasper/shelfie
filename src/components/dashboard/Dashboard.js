import React, {Component} from 'react';
import Product from '../product/Product';
import axios from 'axios';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    deleteProduct = id => {
        const {displayProducts} = this.props

        axios.delete(`/api/product/${id}`)
        .then(res => {
            this.setState({
                productList: res.products
            })
        });

        displayProducts();
    }

    render(){
        const {productList} = this.props

        return(

            <div>
                {
                    productList.map((products) => ( 
                        <Product 
                            key={products.id}
                            id={products.id}
                            name={products.name}
                            img={products.img}
                            price={products.price}
                            deleteProduct={this.deleteProduct}
                        />
                    ))
                }
            </div>
            
        )
    }
}

export default Dashboard;