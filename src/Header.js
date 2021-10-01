import React, { useEffect, useState } from 'react'


import './Nav_bar.css';
const Header = () => {
  const[offsetY,setoffSetY]=useState(0);
    const handleScroll = () => setoffSetY(window.pageYOffset);
    console.log(offsetY);
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[]);
    
    return (
        <div>
           <div id="container_nav" style={{backgroundColor : `rgba(38,13,59,${offsetY*0.0025})`}}>
   <div className="logo">
     
      Portfolio
     
     </div>
     <div className="header_right">     
    
     <div className="adjust1"><a href="#overflow_hide">Home</a></div>
     <div className="li_edit "><a href="#aboutme_cont">About Me</a></div>
     <div className="li_edit "><a href="#footer_">Contact Me</a></div>
   
   </div>
  
   </div> 
        </div>
    )
}

export default Header
