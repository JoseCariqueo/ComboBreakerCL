import React from 'react'
import "../Components/Menu.css"
import Logo from '../Components/images/CB.png'
import Botones from './Botones/Botones'




const Menu = () => {
  return (
    <div>
    

        <nav id='cabezera'>
            <img src={Logo} className="logo"/>
        </nav>

        <Botones/>
      <div id='cuerpo'>
    <h1 className='welcome'>Welcome!</h1>
    <a href="5"> Explore </a>

</div>
</div>

  )
}

export default Menu