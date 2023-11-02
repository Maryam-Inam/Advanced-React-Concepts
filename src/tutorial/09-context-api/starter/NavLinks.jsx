import UserContainer from "./UserContainer"
import useAppContext from "./useAppContext"


const NavLinks = () => {
    const{user,logout}=useAppContext()
  return (
    <div><UserContainer/></div>
  )
}
export default NavLinks