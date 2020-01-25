import React, {Component} from 'react';
import './App.css';
import Dashboard from './components/dashboard/Dashboard';
import Form from './components/form/Form';
import Header from './components/header/Header';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      productList: []
    }
  }

  componentDidMount(){
    this.displayProducts();
  }

  displayProducts = () => {
    axios.get('/api/products')
    .then(res => {
      this.setState({productList: res.products});
    })
  }

  render(){
    return (
      <div className="App">

        <Dashboard 
          productList={this.state.productList}
          displayProducts={this.displayProducts}
        />
        <Form 
          displayProducts={this.displayProducts}
          productList={this.productList}
        />
        <Header />

      </div>
    );
  }
}

export default App;
