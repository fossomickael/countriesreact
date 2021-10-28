import React from 'react';
import ChoixPays from '../containers/ChoixPays'


const Header = () => {
  return (<div className="header">
    <div className="navbar">
        <ul>
            <li><h2>Where in the world?</h2></li>
           
        </ul>
        <div className="choix"><ChoixPays /></div>  
    </div>
    
   
  </div>);
};

export default Header;