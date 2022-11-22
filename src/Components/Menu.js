import React from 'react'
import "../Components/Menu.css"
import Logo from '../Components/images/CB.png'
import Botones from './Botones/Botones'
import video from '../Components/images/backg2.mp4'







const Menu = () => {
  return (
    <div >
    

        <nav id='cabezera'>
            <img src={Logo} className="logo" alt='logoCB'/> 
        </nav>
        <Botones/>
      
       
        <h1 >Welcome!</h1>
        
        <video autoPlay loop muted playsInline className='back-video'>
          <source src={video} type='video/mp4'/>
        </video>
        
 
        </div>

  )
}

export default Menu