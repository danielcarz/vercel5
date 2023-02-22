import React from "react";

//IMAGES AND ICONS
import icon_one from '../assets/emoticons/simbolos-de-reiki.png';
import icon_two from '../assets/emoticons/reiki.png';
import icon_three from '../assets/emoticons/simbolos-de-reiki(1).png';
import about_me_mobile from '../assets/images/about_me_mobile.jpg'

const AboutMe = () => {


    return (

        <section className="about_me_container">
            

            <figure className="about_me_image_wrapper">
                <h2 className="about_me_tittle">ACERCA DE MI</h2>
                <img src={about_me_mobile} alt="about me images" />
            </figure>

            <section className="about_me_info_wrapper">
                
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias quidem quaerat recusandae nisi fugit aliquam tenetur praesentium sed corporis facilis laudantium nulla nobis molestias commodi eligendi, est quisquam aliquid laboriosam!</p>
                <figure className="about_me_icons">
                    <img src={icon_one} alt="icon" />
                    <img src={icon_two} alt="icon" />
                    <img src={icon_three} alt="icon" />
                </figure>
            </section>
        </section>
    )
}

export {AboutMe}