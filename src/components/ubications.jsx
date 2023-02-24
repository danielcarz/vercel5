import React from "react";

//IMAGES
import map from '../assets/images/MAPA2.png'

const Ubication = () => {


    return(
        <section className="ubication_container">
            
            <section className="ubication_info_wrapper">
                
                <ul>
                    <h2 className="subtittle">DIRECCION</h2>
                    <li>  Transversal 32 Sur #32-65 Apto 101
                          Envigado, Antioquia
                                Colombia    
                    </li>
                    <h2 className="subtittle">CELULAR</h2>
                    <li> 301 6765592</li>
                </ul>

                
                <ul>
                   
                    <h2 className="subtittle">HORARIO DE APERTURA</h2>
                    <li>lunes:	7:00–19:00</li>
                    <li>martes:	7:00–19:00</li>
                    <li>miercoles:	7:00–19:00</li>
                    <li>jueves:	7:00–19:00</li>
                    <li>viernes:	7:00–19:00</li>
                    <li>sabado:	7:00–19:00</li>
                    <li>domingo:	7:00–19:00</li>

                </ul>
                   

                
            </section>

            <figure className="ubication_image_wrapper">
                <a href="">
                    <img src={map} alt="ubication" /> 
                </a>
            </figure>

        </section>
    )
}

export {Ubication}