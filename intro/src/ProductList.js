import React, { Component } from "react";
import { Table,Alert,Button } from "reactstrap";
import "./ProductList.css";

export default class ProductList extends Component {
  
  render() {
    return (
      <div>
        <h3>
          {this.props.info.title} <Alert color="warning"> FİLTER={this.props.currentCategory}</Alert>

         
        </h3>
        <Table dark>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quentity Per Unit</th>
              <th>Unit Price</th>
              <th>Unit In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><Button onClick={()=>this.props.addtoCart(product)} color="warning">Add</Button></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
