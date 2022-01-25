import React, { useEffect, useState } from 'react'
import './Main_img.css'
import "./AboutMe.css"
import Landscape1 from './img/LandScape1.png'
import Landscape2 from './img/LandScape2.png'
import Moon1 from './img/Moon1.png'
import Moon2 from './img/Moon2.png'
import Moon3 from './img/Moon3(small).png'
import Stars from './img/stars.png'
import LandscapeMove1 from './img/LandscapeMove1.png'
import LandscapeMove2 from './img/LandscapeMove2.png'
import Header from './Header'



const MainImg = () => {
    const[offsetY,setoffSetY]=useState(0);
    const handleScroll = () => setoffSetY(window.pageYOffset);
    console.log(offsetY);
    useEffect(()=>{
        window.addEventListener("scroll",handleScroll)
    },[]);
    
    return (
        <div id="overflow_hide">
        <div id="mainContent">
        
           <img src={Landscape1} className="L1edit" alt="Landscape1" />
           <img src={LandscapeMove1} className="L1Move" alt="LandScapeMove" style={{transform : `translateX(-${offsetY*0.65}px`}}/>
         <img src={Landscape2} className="L2edit" alt="Landscape2"/>
         <img src={LandscapeMove2} className="L2Move" alt="LandScapeMove" style={{transform : `translateX(${offsetY*0.65}px`}}/>
         <img src={Moon2} className="M2edit" alt="Moon2" style={{transform : `translate(-${offsetY*0.5}px,${offsetY*0.5}px)`}} />
         <img src={Stars} className="Sedit" alt="Stars" style={{transform : `translate(${offsetY*0.15}px,-${offsetY*0.125}px) `}}/>
          
         <img src={Moon1} className="M1edit" alt="Moon1" style={{transform : `translate(-${offsetY*0.5}px,${offsetY*0.5}px)`}}/>
         <img src={Moon3} className="M3edit" alt="Moon3" style={{transform : `translateY(${offsetY*0.65}px`}}/>

         <div className="Myname" style={{transform : `translateX(-${offsetY*0.85}px`}}>Ayushman</div>
         <div className="Myname2" style={{transform : `translateX(${offsetY*0.85}px`}}>Sinha</div>
       
         </div>
         <div id="aboutme_cont">
             <div className="head_container">
         <div className="about_heading" >
               -About Me-
          </div>
          </div>
          <div className="text_container">
          Hi, I am Ayushman Sinha and I am pursuing my Bachelor's in Information Science and Engineering from Siddaganga Institute of Technology, Tumakuru.
          I am from Jamshedpur and I completed my schooling from Hill Top School, Jamshedpur.<br></br> Looking at
various types of applications and wondering how exactly they function
made me realize that software development as a career would give me an
opportunity to develop my very own application softwares and understand
their working.  
<br></br>
Currently, I am working on a Gantt Chart visualizer which would help  visualize the various CPU scheduling algorithms like FCFS, SJF and Round Robin to name a few.
THe project can be found omy github page mentioned below.

          </div>
          <p></p>
          <div className="contact_container">
          <p></p><p></p>
          <div className="contact_heading">
        
               -Contact Me-
               <div className="contact_col">
              <div className="content1"><a href="https://github.com/ayushman-sinha" target="_blank" rel="noreferrer"><i class="fab fa-github-square fa-3x img_size" title="Github"></i></a></div>
              <div className="content1"><a href="https://www.linkedin.com/in/ayushman-sinha-1606/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin fa-3x img_size" title="LinkedIn"></i></a></div>
              <div className="content1"><a href="https://www.hackerrank.com/ayushman_sinhaa" target="_blank" rel="noreferrer"><i class="fab fa-hackerrank fa-3x img_size" title="Github"></i></a></div>             
            </div>
          <div className="contact_col">
          <div className="content2"><a href="https://www.instagram.com/ayushmaan.sinha/" target="_blank" rel="noreferrer"><i class="fab fa-instagram fa-3x img_size1" title="Instagram"></i></a></div>
          <div className="content2"><a href="https://twitter.com/Ayushman_Sinha_" target="_blank" rel="noreferrer"><i class="fab fa-twitter-square fa-3x img_size1" title="Twitter"></i></a></div>
          <div className="content2"><a href="https://www.youtube.com/channel/UC9GVr_5rs_G5wfp_D5IohiQ" target="_blank" rel="noreferrer"><i class="fab fa-youtube-square fa-3x img_size1" title="Youtube"></i></a></div>
              </div>
             
     
          </div>
         

          </div>
          
          <div id="footer_">
              
              Copyright&#9400; 2021 Ayushman Sinha. All rights reserved.
          </div>
             </div>  
        </div>
    );
}
    
export default MainImg

