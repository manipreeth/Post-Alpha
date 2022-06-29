import React,{useContext} from 'react'
import {Usercontext} from '../App'


function MyPosts(props) {

  const {Posts,setPosts} = useContext(Usercontext)  
  
  return(
    <div>

    {Posts.length > 0 ? 
    <div>    
      {Posts.map((value,index)=><div className='myposts'><div className='post'><h4>{value}</h4></div></div>)}
      <button className='delpost  no' onClick={()=>setPosts([])}>Delete All Posts</button>
    </div>
      :
      null }
    </div>
  )
}

export default MyPosts;