

import Loginform from './component/Loginform';
import About from './component/About';
import Signup from './component/Signup';
import Navbar from './component/Navbar';
import Mainpage from './component/Mainpage';
import { Route,Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { auth } from './component/Firebase';

function App() {
  const [userName,setUserName] =useState(" ");
useEffect(()=>{
  auth.onAuthStateChanged((user)=>{

    if(user){
     setUserName(user.displayName) 
    } else setUserName(" ");
   

  });
},[]);

  return (
   
<>
<Navbar/>
<Routes>
<Route path = "/" element = {<Loginform/>} />
<Route path ="/About" element ={<About/>} />
<Route path = "/Signup" element = {<Signup/>} />
<Route path = "/Mainpage" element = {<Mainpage name ={userName}/>} />

</Routes>



</>
  

  )

}

export default App;
