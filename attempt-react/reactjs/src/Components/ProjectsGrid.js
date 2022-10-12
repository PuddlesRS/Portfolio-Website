import { useState } from 'react';
import React from 'react';
import ProjectTagsContainer from './ProjectTagsContainer';
import items from './ProjectsData';
import ToggleButtons from './ToggleButtons';

const allCategories = ['All', ...new Set(items.map(item => item.category))];
console.log(allCategories);

function ProjectGrid()
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
        <div className="App">

            <div className="title">
                <h1>
                    Portfolio
                    <span> Filter</span>
                </h1>
            </div>

            <ToggleButtons button={buttons} filter={filter} />
            <ProjectTagsContainer menuItem={menuItem} />

        </div>
    );
}

export default ProjectGrid;