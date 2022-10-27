import React from 'react';
import SocialsData from './SocialsData';

function SocialsContainer({ socialsItem })
{
	return (
		<div className="socials-container">
			{
				SocialsData.map((socials) =>
				{
					return (
						<a href={socials.link} target="_blank" rel="noreferrer" key={socials.id }>
						<img src={socials.img} alt={socials.alt} className="socials-logos" />
						</a>
					)
				})
			}
		</div>
	)
}

export default SocialsContainer;