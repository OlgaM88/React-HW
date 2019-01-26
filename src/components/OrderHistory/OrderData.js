import React from 'react';

const OrderData = ({ id, date, price, delivery, rating }) => (
  <tr key={id}>
    <td>{date}</td>
    <td>{price}</td>
    <td>{delivery}</td>
    <td>{rating}</td>
  </tr>
);
export default OrderData;
