import React from 'react'
import './Footer.css'

import {ImTwitch} from 'react-icons/im'
import {FiFacebook} from 'react-icons/fi'
import {GrInstagram} from 'react-icons/gr'
import {FaDiscord} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Comunidad Chilena de Fighting Games</a>
 

      <div class="social-container">
 <ul class="social-icons">
 <li><a href="https://www.twitch.tv/combobreakercl" target="_blank"><i   ><ImTwitch/></i></a></li>
 <li><a href="https://www.facebook.com/ComboBreakerCL" target="_blank" ><i><FiFacebook/></i></a></li>
 <li><a href="#"target="_blank"><i ><GrInstagram/></i></a></li>
 <li><a href="#"target="_blank"><i ><FaDiscord/></i></a></li>
 </ul>
      <div className="footer__copyright">
        <p>&copy; José Cariqueo</p>

</div>
      </div>

    </footer>
  )
}

export default Footer