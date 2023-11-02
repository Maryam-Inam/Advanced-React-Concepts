import { useContext } from "react"
import { NavbarContext } from "./Navbar"

const useAppContext = () => {
    return useContext(NavbarContext)
}
export default useAppContext