import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import  ProjectsData  from "../Components/ProjectsData.js";


function Project()
{
    const [text, setText] = useState("");
    const [id, setId] = useState(useParams().id);
    const [title, setTitle] = useState("");

    useEffect(() =>
    {
        for (var i = 0; i < ProjectsData.length; i++) {
            var obj = ProjectsData[i];
            if (obj.id === id) {
                setText(obj.projtext);
                setTitle(obj.projtitle);

            }
        }
    })

    return(
        <>
            <Helmet>
                <title>{title}</title>
            </Helmet>
            <h1 className="project-title">{title}</h1>
            <div className={"proj proj-page-" +  id}>
                
                <div className="project-text">{text}</div>
            </div>
        </>
 )   
}
export default Project;

