import { useEffect, useState } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
const [users,setUsers]=useState([])
const getData=async()=>{
    try{
      // for handling the data on the spot
      const resp= await fetch(url)
      const data=await resp.json()
      setUsers((prevSt)=>{
        console.log(prevSt)
        return data
      })
      //for returning the promise to the callback func
      // const resp= await fetch(url)
      // return resp.json()
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
    getData()
    // getData().then(data=>console.log(data)).catch(err=>console.log(err))
  },[])
  return <>
    <h2>fetch data example</h2>
    <h3>Github Users</h3>
    <ul>{users.map((user)=>(
      <li>{user.login}</li>
    ))}</ul>
  </>
};
export default FetchData;
