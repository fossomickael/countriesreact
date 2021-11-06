import React from 'react';
import SwitchLight from "./switchlight";


const Header = () => {
  return (
  <div className="header" id="header">
      <div className="navbar">
        <div>
           <b>Where in the world?</b>
        </div>
        <SwitchLight />
        
      </div>
    
  </div>);
};

export default Header;