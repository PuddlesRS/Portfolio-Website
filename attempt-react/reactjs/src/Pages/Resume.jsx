import React from 'react';
import ResumeDownload from "../Components/ResumeDownload";

function Resume()
{
    return (
        <>
            <div className="sub-header">
                <ResumeDownload />
            </div>

            <div className="content">    
                <div className="resume-container">
                    <img src={require("../images/resume.jpg")} className="resume-image" alt="resume" />
                </div>
            </div>
        </>
    );
};

export default Resume;