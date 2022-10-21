import React, { useState } from 'react';
import SocialsContainer from "./SocialsContainer";
import socials from "./SocialsData";

function AboutMeGrid()
{
    const [socialsItem, setSocialsItem] = useState(socials);

    return (
        <div className="resume-grid-container">
            <p>"My name is Ryan Smith. I am a self taught developer currently living in the Dallas/Fort Worth Metroplex.
                I am passionate about creating valuable experiences and have backgrounds in a variety of technological
                disciplines." </p>
        
            <SocialsContainer socialsItem={socialsItem} />
        </div>
    );
};

export default AboutMeGrid;