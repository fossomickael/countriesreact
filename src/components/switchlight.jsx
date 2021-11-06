import React, { useState } from 'react';


const SwitchLight = () => {
    const [mode, setMode] = useState("dark");
    const [icon, setIcon]  = useState(<i className="fas fa-moon"></i>);
    const handleSwitch = () => {
        if (mode === "light") {   
            setMode("dark");
            setIcon(<i className="fas fa-moon"></i>);
        } else if (mode === "dark") {
            setMode("light");
            setIcon(<i className="far fa-lightbulb"></i>);
        }
        document.body.classList.toggle("dark");
        const selectregion = document.getElementById("region-select");
        if (selectregion) {
            selectregion.classList.toggle("dark");
        }
        const header = document.getElementById("header");
        header.classList.toggle("dark-header");
      
        
    }

    return (
        <div>
         <button className="btn-switch" onClick={() => handleSwitch()}>
            {icon}
         </button>
        </div>
    );
};

export default SwitchLight;