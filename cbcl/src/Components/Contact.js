import React from 'react'

const Contact = () => {
  return (
    <div>
         <section id="contacto">
                <h3 class="titulo-seccion">Contactame!</h3>
               
                <script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js"></script>
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_ppjmx2th.json"  background="transparent"  speed="1"  style="width: 100px; height: 100px; margin: 0 auto;"  loop autoplay></lottie-player>
        
        
                <div className="contenedor-form">
                    <form action="">
                        <div className="fila mitad">
                            <input type="text" placeholder="Nombre Completo" className="input-mitad"/>
                            <input type="text" placeholder="Email" className="input-mitad"/>
                        </div>
                        <div class="fila">
                            <input type="text" placeholder="Tema..." className="input-full"/>
                        </div>
                        <div class="fila">
                            <textarea name="" id="" cols="30" rows="10" placeholder="Agrega un comentario" className="input-full"></textarea>
                        </div>
                            <input type="submit" value="Enviar Mensaje" className="enviar"/>
                    </form>
        
                </div>
        
        
            </section>
    <footer>
        <p> Todos los derechos reservados - 2022 </p>
        <div class="redes">
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
            <a href="#"><i class="fa-brands fa-youtube"></i></a>
            <a href="#"><i class="fa-brands fa-instagram"></i></a>
            <a href="#"><i class="fa-brands fa-twitter"></i></a>
        </div>
    </footer>
    <script src="/script.js"></script>
    </div>
  )
}

export default Contact