import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {
  const [user,setUser]=useState({})
  const [isLoading,setLoading]=useState(true)
  const [hasError,setError]=useState(false)
  const getData=async()=>{
    try{
      const resp=await fetch(url)
      if(!resp.ok){
        setError(true)
        setLoading(false)
        return
      }
      const data=await resp.json()
      setUser(data)
    }
    catch(err){
      console.log(err)
    }
    setLoading(false)
  }
  useEffect(()=>{
    getData()
  },[])

  if(isLoading){
    return <h2>Loading...</h2>
  } 
  if(hasError){
    return <h2>There was an error...</h2>
  } 
  const {avatar_url,name,company,bio}=user
  return <>
    <h2>Fetch Data </h2>
    <img src={avatar_url} alt="" style={{width:'150px', borderRadius:'25px'}}/>
    <h2>{name}</h2>
    <h4>Works at {company}</h4>
    <h5 style={{fontSize:'0.85rem'}}>{bio}</h5>
  </> 
};
export default MultipleReturnsFetchData;
