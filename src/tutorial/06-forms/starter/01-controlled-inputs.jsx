import { useState } from "react";

const ControlledInputs = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const nameChangeHandler=(e)=>{
    console.log(e.target.value);
    setName(e.target.value)
  }
  const emailChangeHandler=(e)=>{
    console.log(e.target.value);
    setEmail(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    console.log(e);
    console.log(name,email);
  }
  return <form className="form">
    <h4 className="">controlled inputs</h4>
    <div className="form-row">
      <label htmlFor="name" className="form-label">name</label>
      <input type="text" id="name" className="form-input" onChange={nameChangeHandler}/>
    </div>
    <div className="form-row">
      <label htmlFor="email" className="form-label" >email</label>
      <input type="text" id="email" className="form-input" onChange={emailChangeHandler}/>
    </div>
    <button type="submit" className="btn btn-block" onClick={submitHandler}>Submit</button>
  </form>
};
export default ControlledInputs;
