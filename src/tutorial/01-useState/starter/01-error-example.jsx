import { useState } from "react";

const ErrorExample = () => {
  const [count, setCount]=useState(0)
  const incrementCounter =()=>{
    setCount(count+1)
    }
  return <div>
    <h2>You clicked {count} times</h2>
    <button type="button" onClick={incrementCounter} className="btn">increment</button>
    </div>
};

export default ErrorExample;
