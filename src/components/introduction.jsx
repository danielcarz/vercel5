import React from "react";

//IMAGES
import logo from '../assets/images/LOGO ASHIRA 2020.png'

const Introduction = () => {


    return (

        <section className="introduction_container">
            <figure className="logo_wrapper">
                <img src={logo} alt="logo ashira" />
            </figure>

            <section className="lema_ashira_wrapper">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero debitis expedita obcaecati rem dicta, quidem aspernatur earum voluptatum atque fuga.</p>
            </section>

            <nav className="navbar">
                <ul>
                    <li><a href="">item1</a></li>
                    <li><a href="">item1</a></li>
                    <li><a href="">item1</a></li>
                </ul>
            </nav>

           
        </section>
    )
}

export {Introduction}