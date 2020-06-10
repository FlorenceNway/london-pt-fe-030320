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

  const addToCart = (index, id, value) => {
    const localStock = [...stock];
    const localCart = [...cart];

    if (value <= localStock[index].quantity && value !== 0) {
      localStock[index].quantity -= value;

      const itemIndexInCart = localCart.findIndex((item) => item.id === id);

      if (itemIndexInCart !== -1) {
        localCart[itemIndexInCart].quantity += value;
      } else {
        localCart.push({ ...localStock[index], quantity: value });
      }

      setCart(localCart);
      setStock(localStock);
    }
  };

  const updateCart = (id, value) => {
    const localStock = stock.map((item) => {
      if (item.id !== id) {
        return item;
      }
      const prevItem = cart.find((item) => item.id === id);
      const diff = prevItem.quantity - value;
      return { ...item, quantity: item.quantity + diff };
    });

    const localCart = cart
      .map((item) => {
        if (item.id !== id) {
          return item;
        }
        return { ...item, quantity: value };
      })
      .filter((item) => item.quantity > 0);

    setCart(localCart);
    setStock(localStock);
  };


  return (
    <div className="app">
      <Store stock={stock} addToCart={addToCart} />
      <Cart cart={cart} updateCart={updateCart} />
    </div>
  );
};

export default App;
