import React,{useState,useContext} from 'react'
import {Usercontext} from '../App'

function Home() {
  
  const [postDetails,handlePostDetails]= useState('')
  const {Posts,setPosts} = useContext(Usercontext)  
  
  const post = ()=>{
    handlePostDetails('')
    setPosts([...Posts,postDetails])
  }

  return(
    <div className='home'>
      <textarea rows='10' cols='30' value={postDetails} onChange={event=>handlePostDetails(event.target.value)} placeholder='Share Your Moments...'></textarea><br/>
      <button id='postbutton' onClick={post}>Post</button>
    </div>
  )
}
export default Home;