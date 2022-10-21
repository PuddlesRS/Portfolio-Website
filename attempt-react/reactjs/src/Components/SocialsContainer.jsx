import React from 'react';
import SocialsData from './SocialsData';

function SocialsContainer({ socialsItem })
{
	return(
		<div>
			{
				SocialsData.map((socials) =>
				{
					return <img src={socials.img} alt={socials.alt} />
				})
			}
		</div>
	)
}

export default SocialsContainer;