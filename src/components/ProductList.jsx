import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
   render() {
      return (
         <div className="container mt-5">
            <div className="row">
               <ProductItem />
            </div>
         </div>
      );
   }
}
