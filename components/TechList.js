import React from 'react';

const Techlist = ({items}) => (
    <ul> 
     {items.map(item=>(
      <li key ={item.id}>{item.name}</li>
     )) }
     </ul>
);
export default Techlist;