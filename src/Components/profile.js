import React from 'react'

function Profile(props) {
  const{username,useremail,userpassword,usermobile,userdateofbirth,usergender}=props.details
  return(
    <div className='profile'>
      <p><b id='name'>User-Name:</b>{username}</p>
      <p><b id='email'>Email-Address:</b>{useremail}</p>
      <p><b id='pswd'>Password:</b>{userpassword}</p>
      <p><b id='mble'>Mobile:</b>{usermobile}</p>
      <p><b id='dob'>Date of Birth:</b>{userdateofbirth}</p>
      <p><b id='gender'>Gender:</b>{usergender}</p>
    </div>
  )
}
export default Profile;