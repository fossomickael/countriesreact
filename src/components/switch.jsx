import React, { useState } from 'react';


const Switch = () => {
    const [mode, setMode] = useState("dark");
   
    const handleSwitch = () => {
        if (mode === "light") {   
            setMode("dark");
        } else if (mode === "dark") {
            setMode("light");
        }
        const element = document.getElementById("root");
        element.classList.toggle("dark");
    }

    return (
        <div>
         <button className="btn-switch" onClick={() => handleSwitch()}>
            {mode}
         </button>
        </div>
    );
};

export default Switch;