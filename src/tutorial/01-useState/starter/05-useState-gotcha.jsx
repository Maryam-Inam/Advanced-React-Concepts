import { useState } from "react";

const UseStateGotcha = () => {
  const[count,setCount]=useState(0)
  const handleClick=()=>{
    setTimeout(()=>{
      setCount((prevSt)=>{
        return prevSt+1
      })
    }
    ,3000)
  }
  return <>
    <h2>useState "gotcha"</h2>
    <h1>{count}</h1>
    <button className="btn" onClick={handleClick}>increase</button>
  </>
};

export default UseStateGotcha;
