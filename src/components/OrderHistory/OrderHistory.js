import React from "react";
import OrderData from "./OrderData";

let orderColumns = ["Data", "Price", "Delivery", "Rating"];

const OrderHistory = ({ orders }) => (
  <table className="order-list">
    <caption className="order-list-caption">Order History</caption>
    <thead>
      <tr>
        {orderColumns.map(column => {
          return <th>{column}</th>;
        })}
      </tr>
    </thead>

    <tbody>
      {orders.map(order => {
        return (
          <OrderData
            id={order.id}
            data={order.data}
            price={order.price}
            delivery={order.address}
            rating={order.rating}
          />
        );
      })}
    </tbody>
  </table>
);
export default OrderHistory;
