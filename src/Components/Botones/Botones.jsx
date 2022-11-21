import React from 'react'
import './Botones.css'
import Button from '@mui/material/Button';

const Botones = () => {
  return (
    
      <div id='menu'>
        
               <ul>
               <Button className='botones'>Inicio</Button>
               <Button className='botones'>Comunidad</Button>
               <Button className='botones'>Contacto</Button>
              
              </ul>
          </div>
    
  )
}

export default Botones