import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {
            name: '',
            price: 0,
            img: ''
        }
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleImg = e => {
        this.setState({img: e.target.value});
    }
    handleName = e => {
        this.setState({name: e.target.value});
    }
    handlePrice = e => {
        this.setState({price: e.target.value});
    }

    handleCancel(){
        this.setState({
            name: '',
            price: 0,
            img: ''
        });
    }

    createProduct = (name, price, img) => {
        const {displayProducts} = this.props

        axios.post('/api/product', {name, price, img})
        .then(res => {
          this.setState({productList: res.products});
        })

        displayProducts();

        this.handleCancel();
    }

    render(){
        return(
            <div>

            <p>Image URL:</p>
            <input type='text' value={this.img} name='input' onChange={this.handleImg} />

            <p>Product Name:</p>
            <input type='text' value={this.name} name='input' onChange={this.handleName} />

            <p>Price:</p>
            <input type='number' value={this.price} name='input' onChange={this.handlePrice} />

            <button onClick={this.handleCancel}>cancel</button>
            <button onClick={this.createProduct}>Add to Inventory</button>

            </div>
        )
    }
}

export default Form;