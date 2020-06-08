import React, { useState } from "react";
import "./App.css";

import Store from "./components/Store/Store";
import Cart from "./components/Cart/Cart";

const initialStock = [
  {
    id: 1,
    name: "Butter",
    quantity: 20,
  },
  {
    id: 2,
    name: "Apples",
    quantity: 5,
  },
  {
    id: 3,
    name: "Salmon",
    quantity: 13,
  },
  {
    id: 4,
    name: "Soap",
    quantity: 2,
  },
];

const App = () => {
  const [stock, setStock] = useState([...initialStock]);
  const [cart, setCart] = useState([]);

  const [quantity, setQuantity] = useState(0)

  const handleClick = () => {
    console.log('click', quantity)
    setQuantity(0)
  }

  const getQty = (e) => {
    console.log(e.target.value)
    setQuantity(e.target.value)
  }

  return <div className="app">
    <h1>Store</h1>
    <ul>
      {stock.map(item => (
        <li>
          <span>{item.name}</span>
          <input type='number' defaultValue={0} min={0} max={item.quantity} onChange={getQty}/>
          <button onClick={handleClick}>Add to Cart</button>
        </li>
      ))}
    </ul>
    
    <h1>Cart</h1>
    <li>
        <span>Butter</span>
        <button>Update</button>
        <button>Delete</button>
    </li>


  </div>;
};

export default App;
