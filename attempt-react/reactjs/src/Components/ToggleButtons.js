import React, {useState} from 'react';



function ToggleButtons({ button, filter })
{
    const [toggle, setToggle] = useState(false);

    function Toggle(button)
    {
        setToggle(toggle => !toggle)
    }

    return (
        <div className="toggle-container">
            {
                button.map((category, i) =>
                {
                    return <button type="button" onClick={() => filter(category) } className="buttons ">
                        {category}
                    </button>
                })
            }
        </div>
    );
}

export default ToggleButtons;