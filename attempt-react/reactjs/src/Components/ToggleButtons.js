import React, {useState} from 'react';



function ToggleButtons({ button, filter })
{

    return (
        <div className="toggle-container">
            {
                button.map((category, i) =>
                {
                    return <button type="button" onClick={() => filter(category)} className="buttons " key={category}>
                        {category}
                    </button>
                })
            }
        </div>
    );
}

export default ToggleButtons;