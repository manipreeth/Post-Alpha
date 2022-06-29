import {NavLink} from 'react-router-dom'

function Navbar() {
  return(
    <nav>
    <NavLink to='/'>Home</NavLink> &nbsp;
    <NavLink to='/myPosts'>My Posts</NavLink> &nbsp;
    <NavLink to='/profile'>Profile</NavLink> &nbsp;
    <NavLink to='/logout'>Logout</NavLink> &nbsp;
    </nav>
  )
}

export default Navbar;