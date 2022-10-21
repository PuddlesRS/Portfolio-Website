import React from 'react';
import
    {
        BrowserRouter as Router,
        Link
    } from "react-router-dom";


function ProjectTagsContainer({ menuItem })
{
    return (
        <div className="item">
            {
                menuItem.map((item) =>
                {
                    return <Link to={{ pathname: item.link }} target="_blank" >
                        <div className="item-con" key={item.id}>
                            <div className="item-container">
                                <img src={item.image} alt="" />
                                <h2>{item.title}</h2>
                                <p>{item.text}</p>
                            </div>
                        </div>
                    </Link>
                })
            }
        </div>
    )
}




export default ProjectTagsContainer;