import React, { Component } from "react";
import { DataContext } from "./context";

export default class Cart extends Component {
   static contextType = DataContext;
   render() {
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
            <div className="position-relative bg-white shadow rounded-lg p-4 w-75">
               <span
                  style={{
                     width: 40,
                     height: 40,
                     cursor: "pointer",
                     top: 10,
                     right: 10,
                  }}
                  onClick={this.context.onHandleHideCart}
                  className="position-absolute border rounded-circle d-flex justify-content-center align-items-center"
               >
                  X
               </span>
               <table className="table">
                  <thead>
                     <tr>
                        <th>INX</th>
                        <th>NAME</th>
                        <th>IMAGE</th>
                        <th>QUANTITY</th>
                        <th>PRICE</th>
                        <th>TOTAL</th>
                        <th>ACTION</th>
                     </tr>
                  </thead>
                  <tbody>
                     {this.context.cartList.map((item, i) => {
                        return (
                           <tr key={item.product.id}>
                              <td>{i + 1}</td>
                              <td>{item.product.name}</td>
                              <td>
                                 <img
                                    style={{ width: 100 }}
                                    src={item.product.image}
                                    alt=""
                                 />
                              </td>
                              <td>
                                 <button
                                    onClick={() => {
                                       this.context.onHandleDecreaseCart(
                                          item.product.id
                                       );
                                    }}
                                    className="btn btn-info"
                                 >
                                    -
                                 </button>
                                 <i className="mx-3">{item.quantity}</i>
                                 <button
                                    onClick={() => {
                                       this.context.onHandleIncreaseCart(
                                          item.product.id
                                       );
                                    }}
                                    className="btn btn-info"
                                 >
                                    +
                                 </button>
                              </td>
                              <td>${item.product.price}</td>
                              <td>${item.product.price * item.quantity}</td>
                              <td>
                                 <button
                                    onClick={() => {
                                       this.context.onHandleDeleteFromCart(
                                          item.product.id
                                       );
                                    }}
                                    className="btn btn-danger"
                                 >
                                    Delete
                                 </button>
                              </td>
                           </tr>
                        );
                     })}
                     <tr>
                        <td colSpan="7">
                           <h4 className="text-end">
                              Total: $
                              {this.context.cartList.reduce((acc, item, i) => {
                                 return (acc +=
                                    item.product.price * item.quantity);
                              }, 0)}
                           </h4>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <button
                  onClick={this.context.onHandlePayment}
                  className="btn btn-info"
               >
                  Thanh toán
               </button>
            </div>
         </div>
      );
   }
}
