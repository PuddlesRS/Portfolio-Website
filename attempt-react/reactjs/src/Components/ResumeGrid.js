import React from 'react';
import ResumeDownload from "./ResumeDownload";

function ResumeGrid()
{
    return (
        <div className="resume-grid-container">
            <ResumeDownload />
            <div className="resume-container">
                <img src={require("../images/resume.jpg")} className="resume-image" alt="resume" />
            </div>
        </div>
    );
};

export default ResumeGrid;