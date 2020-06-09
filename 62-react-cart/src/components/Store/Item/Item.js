import React, {useState} from "react";

const Item = ({item, addToCart, index}) => {
  const [value, setValue] = useState(0);

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }

  const submitHandler = () => {
    addToCart(index, item.id, parseInt(value));
    setValue(0);
  }

  return (
    <li>
      <span>{item.name}</span>
      <input
        type="number"
        value={value}
        min={0}
        max={item.quantity}
        onChange={onChangeHandler}
      />
      <button onClick={submitHandler}>
        Add to Cart
      </button>
    </li>
  );
};

export default Item;
