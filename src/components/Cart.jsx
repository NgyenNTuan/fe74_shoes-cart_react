import React, { Component } from "react";

export default class Cart extends Component {
   render() {
      return (
         <div
            style={{
               backgroundColor: "rgba(0, 0, 0, 0.5)",
               position: "fixed",
               top: 0,
               left: 0,
               width: "100%",
               height: "100%",
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
                     <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                           <button className="btn-btn-info">-</button>
                           <i className="mx-3">0</i>
                           <button className="btn-btn-info">+</button>
                        </td>
                        <td></td>
                        <td></td>
                        <td>
                           <button className="btn btn-danger">Delete</button>
                        </td>
                     </tr>
                     <tr>
                        <td colSpan="7">
                           <h4 className="text-end">Total: $</h4>
                        </td>
                     </tr>
                  </tbody>
               </table>
               <button className="btn btn-info">Thanh toán</button>
            </div>
         </div>
      );
   }
}
