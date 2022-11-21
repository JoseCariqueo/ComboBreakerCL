import React from 'react'
import './Botones.css'
import Button from '@mui/material/Button';

const Botones = () => {
  return (
    
      <div id='menu'>
        
               <ul>
               {/* <Button className='botones'>Inicio</Button>
               <Button className='botones'>Comunidades</Button>
               <Button className='botones'>Contacto</Button>
               */}

               <button class="lilaButton"> Inicio</button>
               <button class="lilaButton"> Comunidad</button>
               <button class="lilaButton"> Contacto</button>
               
                    
              </ul>
          </div>
    
  )
}

export default Botones