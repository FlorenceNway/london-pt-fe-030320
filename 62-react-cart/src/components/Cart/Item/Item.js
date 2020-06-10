import React, {useState,useEffect} from "react";

const Item = ({item, updateCart}) => {
  const [value, setValue] = useState(item.quantity);

  useEffect(() => {
    setValue(item.quantity)
  },[item.quantity])

  const onChangeHandler = (event) => {
    setValue(parseInt(event.target.value))
  }
  const submitHandler = () => {
    updateCart(item.id, parseInt(value));
  }
  const deleteHandler = () => {
    updateCart(item.id, 0);
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
            <button onClick={submitHandler} className='update'>
              Update
            </button>
            <button className="delBtn delete" onClick={deleteHandler}>
              Delete
            </button>
          </li>
  );
};

export default Item;