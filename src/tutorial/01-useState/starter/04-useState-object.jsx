import { useState } from 'react';

const UseStateObject = () => {
  const [person,setPerson]=useState({
    name: 'Peter',
    age: 24,
    hobby:'Read Books'
  })

  const handleClick=()=>{
    setPerson({
      name: 'John',
      age: 28,
      hobby:'Scream At The Computer',
      name:'Susan'
    })
  }
  return <div>
      <h2>useState object example</h2>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoys to {person.hobby}</h4>
      <button className='btn' onClick={handleClick}>Show John</button>
  </div>
};

export default UseStateObject;
