import React from 'react'
import './mainpage.css' ;

export default function Mainpage(props) {


  
  return (
  
  <>
   <div className='main'>
        <h1>Login Page</h1>
        <h2>Welcome - {props.name} </h2>
    </div>
   
  
  </>
  )
}
