import React from "react";
import Item from './Item/Item'

const Cart = ({ cart }) => {
  return (
    <ul>
      {cart.map((item, index) => (
        <Item key={index} item={item} index={index}/>
      ))}
    </ul>
  );
};
export default Cart;
