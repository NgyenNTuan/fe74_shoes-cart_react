import React, { Component } from "react";

export default class ProductItem extends Component {
   render() {
      return (
         <div className="card p-3 mb-4">
            <img src="" alt="" />
            <h1></h1>
            <h4></h4>
            <p>Price: $</p>
            <div className="d-flex justify-content-center">
               <button className="btn btn-danger me-3">Detail</button>
               <button className="btn btn-info">Cart</button>
            </div>
         </div>
      );
   }
}
