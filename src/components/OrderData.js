import React from "react";

const OrderData = ({ date, price, delivery, rating }) => {
  return (
    <tr>
      <td>{date}</td>
      <td>{price}</td>
      <td>{delivery}</td>
      <td>{rating}</td>
    </tr>
  );
};
export default OrderData;
