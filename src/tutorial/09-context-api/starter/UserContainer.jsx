import useAppContext from "./useAppContext";

const UserContainer = () => {
    const {user,logout}=useAppContext()
    if(!user){
        console.log("hey");
        return(
            <h5>Please Log in</h5>
        )
    }
  return (
    <div>
        <h5>{user?.name}</h5>
        <button className="btn" onClick={logout}>Logout</button>
    </div>
  )
}
export default UserContainer