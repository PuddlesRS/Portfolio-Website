import React from 'react';
import
    {
        BrowserRouter as Router,
        Link
    } from "react-router-dom";


function ProjectTagsContainer({ menuItem })
{
    return (
                menuItem.map((item) =>
                {
                    return <Link to={"/"+item.id} className="project-item" key={item.id}>
                        <img src={item.image} alt={item.alt} className="item-img" />
                            <h2 className="item-title">{item.title}</h2>
                            <p className="item-descrip">{item.text}</p>
                    </Link>
                })
    )
}




export default ProjectTagsContainer;