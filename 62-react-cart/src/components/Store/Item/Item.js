import React, {useState} from "react";

const Item = ({item, addToCart, index}) => {
  const [value, setValue] = useState(0);
  const [disable, setDisable] = useState("")

  const onChangeHandler = (e) => {
    setValue(e.target.value)

    if(e.target.value > item.quantity) {
      setDisable("disable")
    }else {
      setDisable("")
    }
  }

  const submitHandler = () => {
    if(value !== 0 && value <= item.quantity) {
      addToCart(index, item.id, parseInt(value))
    }
  
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
      <button onClick={submitHandler} className={disable} disabled={disable}>
        Add to Cart
      </button>
      <span className='inStock'>In stock: {item.quantity}</span>
    </li>
  );
};

export default Item;
