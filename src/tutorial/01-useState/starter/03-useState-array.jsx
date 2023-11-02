import { useState } from 'react';
import {data} from '../../../data'
const UseStateArray = () => {
  const [arrayData,setData]=useState(data)
  const handleClick=(id)=>{
    setData(arrayData.filter(data=>data.id!==id))
  }
  const clearAll=()=>{
    setData([])
  }
  return <div>
    <h2>useState array example</h2>
    <ul>{arrayData.map(({name,id})=>(
      <div>
        <li>{name}</li>
        <button onClick={()=>handleClick(id)} className='btn'>delete</button>
      </div>
    ))}</ul>
    <button onClick={clearAll}>Clear</button>
    </div>
};

export default UseStateArray;
