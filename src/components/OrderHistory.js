import React from "react";
import OrderData from "./OrderData";

const OrderHistory = ({ orders }) => (
  <table className="order-list">
    <caption className="order-list-caption">Order History</caption>
    <thead>
      <tr>
        <th>Date</th>
        <th>Price</th>
        <th>Delivery</th>
        <th>Rating</th>
      </tr>
    </thead>

    <tbody>
      {orders.map(order => {
        return (
          <OrderData
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
