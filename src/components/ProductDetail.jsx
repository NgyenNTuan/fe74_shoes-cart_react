import React, { Component } from "react";

export default class ProductDetail extends Component {
   render() {
      return (
         <div className="container card p-4">
            <div className="row">
               <div className="col-5">
                  <img src="" alt="" />
               </div>
               <div className="col-7">
                  <h4>Name: </h4>
                  <h4>Price: </h4>
                  <p>Description: </p>
                  <p>Inventory: </p>
               </div>
            </div>
         </div>
      );
   }
}
