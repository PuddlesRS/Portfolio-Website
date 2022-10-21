import React, {useState} from 'react';



function ToggleButtons({ button, filter })
{
    const [toggle, setToggle] = useState(false);

    function Toggle(button)
    {
        setToggle(toggle => !toggle)
    }

    return (
        <div className="buttons">
            {
                button.map((category, i) =>
                {
                    return <button type="button" onClick={() => filter(category) } className="toggle-button ">
                        {category}
                    </button>
                })
            }
        </div>
    );
}

export default ToggleButtons;