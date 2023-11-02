import { useState } from "react";

const MultipleInputs = () => {
  const [users, setUsers]=useState({
    name:'',
    email:'',
    password:''
  })
  const userHandler=(e)=>{
    setUsers(
      {
        ...users,
        [e.target.name]:e.target.value, 
      })
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(users)
  }
  return (
    <div>
      <form className='form'>
        <h4>Multiple Inputs</h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={userHandler} name='name'/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input type='email' className='form-input' id='email' onChange={userHandler} name='email'/>
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input type='password' className='form-input' id='password' onChange={userHandler} name='password' />
        </div>

        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
      </form>
    </div>
  );
};
export default MultipleInputs;
