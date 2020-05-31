import React, { useState } from "react";
import "./App.css";

/**
 * 1. Create component Counter which will have:
 * - button with class {increment}
 * - button with class {decrement}
 * - h1 element which will represent state value
 * - state should hold {counter} value(default value = 0)
 * - with buttons you should be able to in/decrement {counter} value
 */
 
const Counter = () => {
    const [count, setCount] = useState(0);

    return (<div className="counter">
                <h1>{count}</h1>
                <button onClick={() => setCount(count + 1)} className="increment">Add</button>
                <button onClick={() => setCount(count - 1)} className="decrement">Minus</button>
            </div>)
}

export default Counter;