import React,{useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import {Displaycontext} from '../App'
import {Usercontext} from '../App'


function Logout() {

  const {display,handleDisplay} = useContext(Displaycontext)
  const {Posts,setPosts} = useContext(Usercontext)  

  const Navigate = useNavigate()
  const logout = ()=>{
    setPosts('')
    handleDisplay(true)
    }

  return(
    <div className='logout'>
      <h4>Are You Sure, Want To Logout </h4>
      <button className='yes no' onClick={logout}>Yes</button>
      <button className='no' onClick={()=>Navigate('/')}>No</button>
    </div>
  )
}
export default Logout;