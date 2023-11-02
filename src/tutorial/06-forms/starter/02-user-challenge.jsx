import { useState } from "react";
import {data} from '../../../data'
const UserChallenge = () => {
  const [name,setName]=useState('')
  const [users,setUsers]=useState(data)
  const nameChangeHandler=(e)=>{
    setName(e.target.value)
  }
  const removeHandler=(id)=>{
    const newUsers=users.filter(user=>{
      return id!==user.id
    })
    setUsers(newUsers);
  }
  const submitHandler = (e) => {
  e.preventDefault();
  if (!name) return
  setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          id: prevUsers.length+1,
          name: name,
        },
      ];
    });
  }
  return (
    <div>
      <form className='form'>
        <h4>Add User</h4>
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            name
          </label>
          <input type='text' className='form-input' id='name' onChange={nameChangeHandler}/>
        </div>

        <button type='submit' className='btn btn-block' onClick={submitHandler}>
          submit
        </button>
      </form>
      {/* render users below */}
      <h2>Users</h2>
      {users.map(({id, name})=>(
        <div key={id}>
          <h4>{name}</h4>
          <button className="btn" onClick={()=>removeHandler(id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};
export default UserChallenge;
