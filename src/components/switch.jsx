import React, { useState } from 'react';


const Switch = () => {
    const [mode, setMode] = useState("dark");
    const [icon, setIcon]  = useState(<i class="fas fa-moon"></i>);
    const handleSwitch = () => {
        if (mode === "light") {   
            setMode("dark");
            setIcon(<i class="fas fa-moon"></i>);
        } else if (mode === "dark") {
            setMode("light");
            setIcon(<i class="far fa-lightbulb"></i>);
        }
        const element = document.getElementById("root");
        element.classList.toggle("dark");
    }

    return (
        <div>
         <button className="btn-switch" onClick={() => handleSwitch()}>
            {icon}
         </button>
        </div>
    );
};

export default Switch;