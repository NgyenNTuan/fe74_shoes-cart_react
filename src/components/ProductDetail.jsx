import React, { Component } from "react";
import { DataContext } from "./context";

export default class ProductDetail extends Component {
   static contextType = DataContext;
   render() {
      const { image, name, price, description, quantity } =
         this.context.detailProduct;
      return (
         <div
            style={{
               position: "fixed",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
               backgroundColor: "rgba(0, 0, 0, 0.5)",
            }}
            className="d-flex justify-content-center align-items-center"
         >
            <div className="position-relative container bg-white card p-4">
               <span
                  style={{
                     width: 40,
                     height: 40,
                     top: 10,
                     right: 10,
                     cursor: "pointer",
                  }}
                  onClick={this.context.onHandleHideProductDetail}
                  className="position-absolute border rounded-circle d-flex justify-content-center align-items-center"
               >
                  X
               </span>
               <div className="row justify-content-around">
                  <div className="col-3">
                     <img style={{ width: "100%" }} src={image} alt="" />
                  </div>
                  <div className="col-7">
                     <h4>Name: {name}</h4>
                     <h4>Price: ${price}</h4>
                     <p>Description: {description}</p>
                     <p>Inventory: {quantity}</p>
                  </div>
               </div>
            </div>
         </div>
      );
   }
}
