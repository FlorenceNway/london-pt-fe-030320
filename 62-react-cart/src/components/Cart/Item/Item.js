import React, {useState} from "react";

const Item = ({item, index}) => {
  const [value, setValue] = useState(0);

  const onChangeHandler = (event) => {
    setValue(event.target.value)
  }
  const updateCart = (qty, id) => {
    console.log(qty, id , value)
  }

  return (
          <li>
            <span>{item.name}</span>
            <input
              type="number"
              value={item.quantity || 0}
              min={0}
              max={item.quantity}
              onChange={onChangeHandler}
            />
            <button onClick={() => updateCart(item.quantity, item.id)}>
              Update
            </button>
            <button className="delBtn">
              Delete
            </button>
          </li>
  );
};

export default Item;
