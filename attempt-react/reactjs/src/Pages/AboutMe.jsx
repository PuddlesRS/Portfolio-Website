import React, { useState } from 'react';
import SocialsContainer from "../Components/SocialsContainer";
import socials from "../Components/SocialsData";
import photo from "../images/about-pic.png";

function AboutMe()
{
    const [socialsItem, setSocialsItem] = useState(socials);

    return (
        <div className="content">
            <div className="about-container">
                <img src={photo} alt="Ryan Smith" className="about-pic" />
                <p className="about-descrip">My name is Ryan Smith.  I am a self taught developer currently living in the Dallas/Fort Worth Metroplex. 
                    I have always loved technology and been passionate about creating experiences which add value to people's lives.  Whether it be my roots
                    in graphic design all the way to creating software, videogames, or websites.
                </p>
                <SocialsContainer socialsItem={socialsItem} />
            </div>
        </div>
    );
};



export default AboutMe;