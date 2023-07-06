import React,{useContext} from 'react'
import { NavLink } from 'react-router-dom'
import { Cartcontext } from '../context/Context';

const Navbar = () => {
  const Globalstate=useContext(Cartcontext);
  const state=Globalstate.state;
  // console.log(state);
  return (
    <div className="navbar">
        <div className="nav">
            <NavLink className="navlink" to='/' >Home</NavLink>
            <NavLink className="navlink" to='/cart'>Cart({state.length})</NavLink>
        </div>
      
    </div>
  )
}

export default Navbar
