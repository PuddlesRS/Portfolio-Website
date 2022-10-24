import React from 'react';
import resume from "../images/resume.jpg";

function ResumeDownload()
{
    return (
        <a href={resume} download="Ryan-Smith-Resume" className="resume-download-container">
            <button className="buttons">Download</button>
        </a>
    );
};

export default ResumeDownload;