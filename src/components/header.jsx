import React from 'react';
import Switch from "./switch";


const Header = () => {
  return (
  <div className="header">
      <div className="navbar">
        <div>
           <b>Where in the world?</b>
        </div>
        <Switch />
        
      </div>
    
  </div>);
};

export default Header;