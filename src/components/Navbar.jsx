import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthProvider'

const Navbar = () => {
   const [user, setUser]=  useContext(AuthContext)
   return (
       <nav className='w-[80vw] bg-slate-300 mx-auto'>
        <ul>
            <li><Link to={"/"}>Home</Link></li>
            <li><Link to={"/dashboard"}>Dashboard</Link></li>
            <li><Link to={"/login"}>Login</Link></li>
            <li><Link to={"/signup"}>Signup</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar