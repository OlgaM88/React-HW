import React from 'react';
import Product from './Product';

const ProductList = ({ products }) => (
  <ul>
    {products.map(product => (
      <li key={product.id}>
        <Product
          image={product.imgUrl}
          name={product.name}
          text={product.price}
          alt={product.alt}
        />
      </li>
    ))}
  </ul>
);
export default ProductList;
