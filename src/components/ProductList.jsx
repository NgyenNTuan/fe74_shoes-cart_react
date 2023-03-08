import React, { Component } from "react";
import ProductItem from "./ProductItem";
import { DataContext } from "./context";

export default class ProductList extends Component {
   static contextType = DataContext;
   render() {
      return (
         <div className="container mt-5">
            <div className="row">
               {this.context.data.map((item) => {
                  return (
                     <div key={item.id} className="col-3">
                        <ProductItem prod={item} />
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
