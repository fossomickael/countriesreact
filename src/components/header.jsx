import React from 'react';
import SearchBar from './searchbar';


const Header = () => {
  return (<div className="header">
    <div><SearchBar /></div>
    <div>Where in the world?</div>
  </div>);
};

export default Header;