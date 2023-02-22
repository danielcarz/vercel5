import React from "react";

//IMAGES
import map from '../assets/images/MAPA2.png'

const Ubication = () => {


    return(
        <section className="ubication_container">
            <section className="ubication_info_wrapper">
                <ul>
                    <li>direccion 1</li>
                    <li>direccion 1</li>
                    <li>direccion 1</li>
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