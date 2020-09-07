import React, { Component } from "react";
import "./App.css";
import Navi from "./Navi";
import ProductList from "./ProductList";
import CategoryList from "./CategoryList";
import { Container, Row, Col } from "reactstrap";
export default class App extends Component {
  state = { currentCategory: "",products:[] ,cart:[]};
  componentDidMount() {
    this.getProducts();
  }


  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };
  getProducts = (categoryId) => {
    let url = "http://localhost:3000/products"
    if(categoryId){
      url+="?categoryId="+categoryId;
    }

    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ products: data }));
  };
  addtoCart=(product)=>{
    let newCart=this.state.cart;
     var addeditem= newCart.find(c=>c.product.id===product.id);
     if (addeditem) {
       addeditem.quantity+=1;
       
     }else{
       newCart.push({product:product,quantity:1});
     }
    
    this.setState({cart:newCart});

}

  render() {
    const productInfo = { title: "Product List" };
    const categoryInfo = { title: "Category List" };

    return (
      <div>
        <Container>
          
            <Navi cart={this.state.cart}/>
          
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory} changeCategory={this.changeCategory} info={categoryInfo} />
            </Col>
            <Col xs="9">
              <ProductList products={this.state.products} addtoCart={this.addtoCart} currentCategory={this.state.currentCategory} info={productInfo} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
