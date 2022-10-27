import { useState } from 'react';
import React from 'react';
import ProjectTagsContainer from '../Components/ProjectTagsContainer';
import items from '../Components/ProjectsData';
import ToggleButtons from '../Components/ToggleButtons';

const allCategories = ['All', ...new Set(items.map(item => item.category))];
console.log(allCategories);

function ProjectsPage()
{
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);



    const filter = (button) =>
    {

        if (button === 'All') {
            setMenuItem(items);
            return;
        }

        const filteredData = items.filter(item => item.category === button)
        setMenuItem(filteredData)
    }

    return (
        <>
            <div className="sub-header">
                <ToggleButtons button={buttons} filter={filter} />
            </div>

            <div className="content">
                <div className="projects-container">            
                    <ProjectTagsContainer menuItem={menuItem} />
                </div> 
            </div>
        </>
    );
}

export default ProjectsPage;