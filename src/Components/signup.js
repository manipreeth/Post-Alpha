import React,{useState} from 'react'
import {Form} from 'react-bootstrap'
import PathConfig from './path-configuration'



function Signup() {
  const [name,handleNameChange] =useState('')
  const [email,handleEmailChange] =useState('')
  const [password,handlePasswordChange] =useState('')
  const [dateofbirth,handleDateofbirthChange] =useState('')
  const [gender,handleGenderChange] =useState('')
  const [mobile,handleMobileChange] =useState('')
  const [submit,handlleSubmit] = useState(false)

  const [userDetails,handleUserinput] = useState([])

    const formSubmission = ()=>{
      handleUserinput(
        [...userDetails,
          {
            username:name,
            useremail:email,
            userpassword:password,
            usermobile:mobile,
            userdateofbirth:dateofbirth,
            usergender:gender,
          }
        ]
        )
      handlleSubmit(true)
    }

return(
  <div>
    { submit=== false ?
    <div className='signupform'>
      <Form>
      <h1>SignUp</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name:</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" value={name}
          onChange={event=>handleNameChange(event.target.value)}  required />


          <Form.Label>Email:</Form.Label>
          <Form.Control type="text" placeholder="Enter Email Address" value={email}
          onChange={event=>handleEmailChange(event.target.value)}   />

          <Form.Label>Password:</Form.Label>
          <Form.Control type="text" placeholder="Enter Password" value={password}
          onChange={event=>handlePasswordChange(event.target.value)}  />

          <Form.Label>Mobile Number: </Form.Label>
          <Form.Control type="text"  placeholder="1234-56-7890" 
          value={mobile} onChange={event=>handleMobileChange(event.target.value)} />
          
          <Form.Label>Date Of Birth: </Form.Label>
          <Form.Control type="date" id="dob" value={dateofbirth}
          onChange={event=>handleDateofbirthChange(event.target.value)} />
        

          <Form.Label>Gender:</Form.Label>
          <Form.Check type='radio'id={`default-radio`} label='Male' value="Male" name="gender" onChange={event=>handleGenderChange(event.target.value)} />
          <Form.Check type='radio'id={`default-radio`} label='Female' value="Female" name="gender" onChange={event=>handleGenderChange(event.target.value)} />        

        </Form.Group>
        

      </Form>
      <button className='submitbutton' onClick={formSubmission}>Submit</button>
      </div>

        :

      <div>
        {userDetails.map((value)=><PathConfig details={value}/>)}
      </div>
    }
    </div>
  )
}
export default Signup;