import React from 'react'
import './Botones.css'
import Button from '@mui/material/Button';

const Botones = () => {
  return (
    
      <div id='menu'>
        
               <ul className='menuBottons'>
               <Button className='hoverMe'>Inicio</Button>
               <Button className='hoverMe'>Comunidad</Button>
               <Button className='hoverMe'>Contacto</Button>
               
             </ul>
          </div>
    
  )
}

export default Botones