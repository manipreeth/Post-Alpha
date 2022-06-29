import {Routes,Route} from 'react-router-dom'
import Navbar from './nav-bar'
import Singup from './signup'
import Home from './home'
import Myposts from './myPosts'
import Profile from './profile'
import Logout from './logout'

function PathConfig(props) {
  const Details = props.details;
  return(
    <div>
    <Navbar/>
    <Routes>
    <Route path='signup' element={<Singup/>}/>
    <Route path='/' element={<Home/>} />
    <Route path='myPosts' element={<Myposts/>}/>
    <Route path='profile' element={<Profile details={Details}/>}/>
    <Route path='logout' element={<Logout/>}/>
    </Routes>
    </div>
  )
}
export default PathConfig;