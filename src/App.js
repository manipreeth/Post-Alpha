import "./styles.css";
import React,{useState} from 'react'


import Singup from './Components/signup'
import Signin from './signin'

export const Usercontext = React.createContext(null);
export const Displaycontext = React.createContext(null);



export default function App() {

const [Posts,setPosts] = useState([])
const [display,handleDisplay] = useState(false)

  return (
    <div className="App">
    {display=== false ?
    <div>
  <Usercontext.Provider value={{Posts,setPosts}}>  
  <Displaycontext.Provider value={{display,handleDisplay}}>  
    <Singup/>
  </Displaycontext.Provider>
  </Usercontext.Provider>
    </div>
    :
    <div>
      <Displaycontext.Provider value={{display,handleDisplay}}>  
          <Signin/>
      </Displaycontext.Provider>
    </div>
    }
    </div>
  );
}
