import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import  ProjectsData  from "../Components/ProjectsData.js";


function Project()
{
    const [imgs, setImgs] = useState([]);
    const [text, setText] = useState("");
    const [id, setId] = useState(useParams().id);
    const [title, setTitle] = useState("");
    const [stylePath, setStylePath] = useState("");

    useEffect(() =>
    {
        for (var i = 0; i < ProjectsData.length; i++) {
            var obj = ProjectsData[i];
            if (obj.id === id) {
                setImgs(obj.imgs);
                setText(obj.projtext);
                setTitle(obj.projtitle);
                setStylePath(obj.stylePath);
            }
        }
    })

    return(
    <>
        <Helmet>
     
                < link rel="stylesheet2" type="text/css" href="../projectStylesheets/techHaven.css"
 />
        </Helmet>

            <div className="proj-page">

            <div className="project-title">{title}</div>
            <div className="project-text">{text}</div>
            <img src={imgs[0]} className="proj-image-0" alt=""/>
            <img src={imgs[1]} className="proj-image-1" alt=""/>
            <img src={imgs[2]} className="proj-image-2" alt=""/>
            <img src={imgs[3]} className="proj-image-3" alt=""/>
            <img src={imgs[4]} className="proj-image-4" alt=""/>
        </div>
    </>
 )   
}
export default Project;

