import React, { Component } from "react";
import { DataContext } from "./context";

export default class ProductItem extends Component {
   static contextType = DataContext;
   render() {
      const { name, image, price } = this.props.prod;
      return (
         <div className="card p-3 mb-4">
            <img src={image} alt="" />
            <h4>{name}</h4>
            <p>Price: ${price}</p>
            <div className="d-flex justify-content-center">
               <button
                  onClick={() => {
                     this.context.onHandleShowProductDetail(this.props.prod);
                  }}
                  className="btn btn-danger me-3"
               >
                  Detail
               </button>
               <button
                  onClick={() => {
                     this.context.onHandleAddToCart(this.props.prod);
                  }}
                  className="btn btn-info"
               >
                  Cart
               </button>
            </div>
         </div>
      );
   }
}
