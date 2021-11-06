import React from 'react';
import SwitchLight from "./switch";


const Header = () => {
  return (
  <div className="header">
      <div className="navbar">
        <div>
           <b>Where in the world?</b>
        </div>
        <SwitchLight />
        
      </div>
    
  </div>);
};

export default Header;